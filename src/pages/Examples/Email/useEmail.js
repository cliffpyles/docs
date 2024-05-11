import { useMemo, useState } from 'react';
import { chain } from 'lodash';
import * as config from './config';

export default function useEmail() {
  const [emails] = useState(config?.emails);
  const [labels] = useState(config?.labels);
  const [folders] = useState(config?.folders);
  const [activeLabelIds, setActiveLabelIds] = useState([]);
  const [activeEmailId, setActiveEmailId] = useState();
  const [activeFolderId, setActiveFolderId] = useState(
    config?.settings?.defaultFolder
  );
  const labelsById = useMemo(() => {
    return chain(labels).keyBy('id').value();
  }, [labels]);
  const foldersById = useMemo(() => {
    return chain(folders).keyBy('id').value();
  }, [folders]);
  const emailsByFolderId = useMemo(() => {
    return chain(emails).groupBy('folderId').value();
  }, [emails]);
  const activeFolder = useMemo(
    () => folders.find((folder) => folder.id === activeFolderId),
    [folders, activeFolderId]
  );
  const activeFolderEmails = useMemo(() => {
    return emailsByFolderId[activeFolderId]?.map((email) => {
      return {
        ...email,
        labels: email?.labelIds.length
          ? email.labelIds.map((labelId) => labelsById[labelId])
          : [],
      };
    });
  }, [emailsByFolderId, activeFolderId, labelsById]);
  const activeEmail = useMemo(
    () => activeFolderEmails.find((email) => email.id === activeEmailId),
    [activeFolderEmails, activeEmailId]
  );
  const activeLabels = useMemo(() => {
    return activeLabelIds.map((labelId) => labelsById[labelId]);
  }, [labelsById, activeLabelIds]);
  const activeLabelEmails = useMemo(() => {
    return emails
      .filter((email) =>
        email?.labelIds?.some((labelId) => activeLabelIds?.includes(labelId))
      )
      ?.map((email) => {
        return {
          ...email,
          labels: email?.labelIds.length
            ? email.labelIds.map((labelId) => labelsById[labelId])
            : [],
        };
      });
  }, [emails, activeLabelIds, labelsById]);
  const unreadEmails = useMemo(() => {
    return emails.filter((email) => !email?.viewed);
  }, [emails]);
  const unreadEmailsByFolderId = useMemo(() => {
    return chain(unreadEmails).groupBy('folderId').value();
  }, [unreadEmails]);

  return useMemo(() => {
    function composeEmail(folderId) {}

    function openEmail(emailId) {
      setActiveEmailId(emailId);
    }

    function openFolder(folderId) {
      setActiveFolderId(folderId);
    }

    function filterByLabel(labelId) {
      setActiveLabelIds([...activeLabelIds, labelId]);
    }

    function searchEmails(labelId) {}

    function clearLabelFilters() {
      setActiveLabelIds([]);
    }

    function reportAsSpam() {}

    function moveToFolder() {}

    function applyLabel() {}

    function deleteEmail() {}

    function goToNextEmail() {}

    function goToPreviousEmail() {}

    return {
      activeEmail,
      activeEmailId,
      activeFolder,
      activeFolderEmails,
      activeFolderId,
      activeLabelEmails,
      activeLabelIds,
      activeLabels,
      applyLabel,
      clearLabelFilters,
      composeEmail,
      deleteEmail,
      emails,
      emailsByFolderId,
      filterByLabel,
      folders,
      foldersById,
      goToNextEmail,
      goToPreviousEmail,
      labels,
      labelsById,
      moveToFolder,
      openEmail,
      openFolder,
      reportAsSpam,
      searchEmails,
      unreadEmails,
      unreadEmailsByFolderId,
    };
  }, [
    emails,
    labels,
    folders,
    activeEmailId,
    activeEmail,
    activeFolder,
    activeFolderId,
    activeFolderEmails,
    activeLabels,
    activeLabelIds,
    activeLabelEmails,
    emailsByFolderId,
    labelsById,
    foldersById,
    unreadEmails,
    unreadEmailsByFolderId,
  ]);
}
