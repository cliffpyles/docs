## Hierarchy

```mermaid
flowchart TB
subgraph Level1["Level 1"]
    direction TB
    subgraph LayoutComponents["Layout Components"]
        direction TB
        Box
        Grid
    end
    subgraph IconComponents["Icon Components"]
        direction TB
        CloseIcon
        MenuIcon
        HelpIcon
    end
    subgraph TextComponents["Text Components"]
        direction TB
        Heading
        Paragraph
        Text
    end
    subgraph UtilityComponents["Utility Components"]
        direction TB
        Announce
        Collapsible
        Keyboard
        Responsive
        Theme
    end
end

subgraph Level2["Level 2"]
    direction LR
    subgraph ContainerComponents["Container Components"]
        direction TB
        Footer
        Header
        Layer
        Main
        Page
        Sidebar
        Stack
    end
end

subgraph Level3["Level 3"]
    direction TB
    subgraph ControlComponents["Control Components"]
        direction TB
        Button
        Link
        Menu
        Nav
        Tabs
    end
    subgraph InputComponents["Input Components"]
        direction TB
        CheckBox
        FileInput
        TextArea
        TextInput
        Select
    end
    subgraph VisualizationComponents["Visualization Components"]
        direction TB
        Chart
        Diagram
        Map
    end
    subgraph MediaComponents["Media Components"]
        direction TB
        Carousel
        Image
        Video
    end
end

subgraph Level4["Level 4"]
    direction LR
end

subgraph Level5["Level 5"]
    direction LR
end

Level1 --> Level2 --> Level3 --> Level4 --> Level5
```

Button
Input
Modal
Dropdown
Tooltip
Form
Checkbox
RadioButton
Select
Card
Alert
Table
Tabs
Badge
Accordion
Popover
ProgressBar
Breadcrumb
Slider
Spinner
Switch
Pagination
Sidebar
Stepper
Timeline
Carousel
Grid
Flexbox
Container
Box
Stack
Spacer
Divider
AspectRatioBox
GridList
LayoutGrid
