import moment from "moment";
import { Avatar, Box, Button, DropButton, Grid, Heading, InfiniteScroll, Markdown, Text, TextInput } from "grommet";
import { Flag, Folder, Next, Previous, StatusGoodSmall, Tag, Trash } from "grommet-icons";

import useEmail from "./useEmail";

function EmailTag({ color, label, ...props }) {
  return (
    <Box
      className="EmailTag"
      background={color}
      pad={{
        horizontal: "small",
        vertical: "xsmall",
      }}
      {...props}
    >
      <Text size="small">{label}</Text>
    </Box>
  );
}

function EmailFolders({ folders = [], activeFolderId, unreadEmails = {}, onClick = () => {} }) {
  return (
    <Box pad="medium" gap="small" flex={false}>
      {folders.map((folder) => (
        <Button key={folder.id} onClick={() => onClick(folder.id)} plain>
          <Box direction="row" justify="between">
            <Text
              color={folder?.id === activeFolderId ? "brand" : null}
              weight={folder?.id === activeFolderId ? "bold" : null}
            >
              {folder?.name}
            </Text>
            {unreadEmails[folder.id] && (
              <Text size="small" weight="bold">
                {unreadEmails[folder.id].length}
              </Text>
            )}
          </Box>
        </Button>
      ))}
    </Box>
  );
}

function EmailShort({ subject, sender, labels, sent, onClick = () => {}, background }) {
  return (
    <Button onClick={onClick} plain>
      <Box direction="row" pad="medium" gap="small" flex={false} background={background}>
        <Avatar src={sender?.profile} />
        <Box flex>
          <Box>
            <Box direction="row" justify="between" fill="horizontal">
              <Text color="dark-2" size="xsmall">
                {sender?.firstName} {sender?.lastName}
              </Text>

              <Text color="dark-6" size="xsmall">
                {moment(sent).format("ll")}
              </Text>
            </Box>
            <Text weight="bold" truncate>
              {subject}
            </Text>
          </Box>
          <Box direction="row" gap="xxsmall" margin={{ top: "xsmall" }}>
            {labels.map((label) => (
              <Box key={`${label.id}`} background={label.color} round pad="xsmall" />
            ))}
          </Box>
        </Box>
      </Box>
    </Button>
  );
}

function EmailThread({ id, body, labels, recipients, subject, sender, sent }) {
  return (
    <Box>
      <Box direction="row" align="center" justify="start" gap="small" pad="large" border="bottom">
        <Heading level={4} margin="none">
          {subject}
        </Heading>
        {labels.map((label) => (
          <EmailTag key={label?.id} label={label?.name} color={label?.color} />
        ))}
      </Box>

      <Box direction="row" pad="medium" gap="small" flex={false} border="bottom">
        <Avatar src={sender?.profile} />
        <Box flex>
          <Box direction="row" justify="between" fill="horizontal">
            <Box>
              <Text color="dark-2" size="xsmall" weight="bold">
                {sender?.firstName} {sender?.lastName}
              </Text>

              <Box direction="row" gap="xsmall">
                <Text size="xsmall">to</Text>
                {recipients.map((recipient) => {
                  return (
                    <Text key={recipient?.id} color="dark-2" size="xsmall" weight="bold">
                      {recipient?.firstName} {recipient?.lastName}
                    </Text>
                  );
                })}
              </Box>
            </Box>

            <Text color="dark-6" size="xsmall">
              {moment(sent).format("ll")}
            </Text>
          </Box>
        </Box>
      </Box>

      <Box pad="medium" flex={false} border="bottom">
        <Markdown>{body}</Markdown>
      </Box>

      <Box direction="row" justify="end" pad="medium">
        <Button label="Reply" />
      </Box>
    </Box>
  );
}

function EmailLabels({ labels = [], onClick = () => {} }) {
  return (
    <Box pad="medium" gap="small" flex={false}>
      {labels.map((label) => (
        <Button key={label?.id} onClick={() => onClick(label?.id)} plain>
          <Box direction="row" justify="between">
            <StatusGoodSmall color={label?.color} />
            <Text>{label?.name}</Text>
          </Box>
        </Button>
      ))}
    </Box>
  );
}

function EmailsByFolder({ emails = [], activeEmail, onClick, onSearch }) {
  return (
    <Box>
      <Box pad={{ vertical: "xsmall", horizontal: "small" }} border="bottom" flex={false}>
        <TextInput placeholder="Search Email" plain onChange={(event) => onSearch(event.target.value)} />
      </Box>
      <Box overflow="auto">
        <InfiniteScroll steps={3} items={emails} show={0}>
          {(email, index) => (
            <EmailShort
              key={email.id}
              {...email}
              labels={email.labels}
              border={index ? "top" : null}
              background={activeEmail?.id === email?.id ? "light-1" : null}
              onClick={() => onClick(email.id)}
            />
          )}
        </InfiniteScroll>
      </Box>
    </Box>
  );
}

function EmailsByLabel({ emails = [], labels = [], activeEmail, onClick, onClear }) {
  return (
    <Box overflow="auto">
      <InfiniteScroll steps={3} items={emails} show={0}>
        {(email, index) => (
          <EmailShort
            key={email.id}
            {...email}
            border={index ? "top" : null}
            background={activeEmail?.id === email?.id ? "light-1" : null}
            onClick={() => onClick(email.id)}
          />
        )}
      </InfiniteScroll>
    </Box>
  );
}

function AppliedFilters({ labels, onClear }) {
  return (
    <Box direction="row" justify="end" align="center" gap="small" flex={false} fill>
      <Box direction="row" justify="start" gap="small" flex={false}>
        {labels.map((label) => (
          <EmailTag key={label?.id} label={label?.name} color={label?.color} />
        ))}
      </Box>
      <Button onClick={() => onClear()} plain>
        clear
      </Button>
    </Box>
  );
}

function EmailActions({ reportAsSpam, moveToFolder, applyLabel, deleteEmail, folders, labels, email }) {
  return (
    <Box direction="row" gap="medium" align="center">
      <Button icon={<Flag size="small" />} onClick={() => reportAsSpam(email?.id)} plain />
      <DropButton
        icon={<Folder size="small" />}
        dropAlign={{ top: "bottom" }}
        dropContent={
          <Box pad={{ vertical: "small" }} gap="small">
            <Box pad={{ horizontal: "small" }}>
              <Text weight="bold">Folders</Text>
            </Box>
            {folders?.map?.((folder) => (
              <Box key={folder?.id} pad={{ horizontal: "small" }}>
                <Button label={folder?.name} onClick={() => moveToFolder(email?.id, folder?.id)} plain />
              </Box>
            ))}
          </Box>
        }
        plain
      />
      <DropButton
        icon={<Tag size="small" />}
        dropAlign={{ top: "bottom" }}
        dropContent={
          <Box pad={{ vertical: "small" }} gap="small">
            <Box pad={{ horizontal: "small" }}>
              <Text weight="bold">Labels</Text>
            </Box>
            {labels?.map?.((label) => (
              <Box key={label?.id} pad={{ horizontal: "small" }}>
                <Button label={label?.name} onClick={() => applyLabel(email?.id, label?.id)} plain />
              </Box>
            ))}
          </Box>
        }
        plain
      />
      <Button icon={<Trash size="small" />} onClick={() => deleteEmail(email?.id)} plain />
    </Box>
  );
}

function EmailPrevNext({ goToNextEmail, goToPreviousEmail, email }) {
  return (
    <Box direction="row" gap="medium" align="center">
      <Button icon={<Previous size="small" />} onClick={() => goToPreviousEmail(email?.id)} plain />
      <Button icon={<Next size="small" />} onClick={() => goToNextEmail(email?.id)} plain />
    </Box>
  );
}

export function Email() {
  const {
    activeEmail,
    activeFolder,
    activeFolderId,
    activeFolderEmails,
    activeLabelEmails,
    activeLabels,
    applyLabel,
    clearLabelFilters,
    composeEmail,
    deleteEmail,
    folders,
    filterByLabel,
    goToNextEmail,
    goToPreviousEmail,
    labels,
    labelsById,
    moveToFolder,
    openEmail,
    openFolder,
    reportAsSpam,
    searchEmails,
    unreadEmailsByFolderId,
  } = useEmail();

  return (
    <Grid
      columns={["1/4", "1/4", "1/4", "1/4"]}
      rows={["auto", "flex", "auto"]}
      areas={[
        ["EmailCompose", "EmailThreadsHeader", "EmailThreadHeader", "EmailThreadHeader"],
        ["EmailSidebar", "EmailThreads", "EmailThread", "EmailThread"],
        ["EmailSidebar", "EmailThreads", "EmailThread", "EmailThread"],
      ]}
      fill
    >
      <Box
        gridArea="EmailCompose"
        pad="medium"
        border={[{ side: "bottom" }, { side: "right" }]}
        height="xsmall"
        justify="center"
      >
        <Button label="Compose" primary onClick={() => composeEmail()} />
      </Box>
      <Box gridArea="EmailSidebar" border="right" overflow="auto">
        <EmailFolders
          activeFolderId={activeFolderId}
          folders={folders}
          unreadEmails={unreadEmailsByFolderId}
          onClick={(id) => openFolder(id)}
        />
        <EmailLabels labels={labels} onClick={(id) => filterByLabel(id)} />
      </Box>
      <Box
        gridArea="EmailThreadsHeader"
        direction="row"
        pad="medium"
        border={[{ side: "bottom" }, { side: "right" }]}
        height="xsmall"
        align="center"
        justify="between"
      >
        {activeLabels.length ? (
          <AppliedFilters
            emails={activeLabelEmails}
            labels={activeLabels}
            onClick={openEmail}
            onClear={clearLabelFilters}
          />
        ) : (
          <Heading level="4" margin="none">
            {activeFolder?.name}
          </Heading>
        )}
      </Box>

      <Box gridArea="EmailThreads" border="right">
        {activeLabels.length ? (
          <EmailsByLabel
            emails={activeLabelEmails}
            labels={activeLabels}
            onClick={openEmail}
            onClear={clearLabelFilters}
          />
        ) : (
          <EmailsByFolder emails={activeFolderEmails} onClick={openEmail} onSearch={(value) => searchEmails(value)} />
        )}
      </Box>
      <Box gridArea="EmailThreadHeader" direction="row" justify="between" height="xsmall" pad="medium" border="bottom">
        {activeEmail && (
          <EmailActions
            reportAsSpam={reportAsSpam}
            applyLabel={applyLabel}
            deleteEmail={deleteEmail}
            moveToFolder={moveToFolder}
            email={activeEmail}
            folders={folders}
            labels={labels}
          />
        )}
        {activeEmail && (
          <EmailPrevNext goToNextEmail={goToNextEmail} goToPreviousEmail={goToPreviousEmail} email={activeEmail} />
        )}
      </Box>
      <Box gridArea="EmailThread">
        {activeEmail && (
          <EmailThread
            {...activeEmail}
            labels={activeEmail.labelIds.map((labelId) => {
              return labelsById[labelId];
            })}
          />
        )}
      </Box>
    </Grid>
  );
}
