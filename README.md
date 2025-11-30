# Blender Shortcuts Reference Website

A beautiful, interactive website for managing and referencing Blender keyboard shortcuts. Built with a dark theme and card-based layout inspired by [hollisbrown/blendershortcuts](https://github.com/hollisbrown/blendershortcuts).

## Features

- 🎨 **Dark theme** with card-based layout matching the reference site
- 🏷️ **Tag filtering** - Filter shortcuts by tags (General, Navigation, Selection, Modeling, Beginner, Wizard)
- 📋 **Collapsible cards** - Click to expand/collapse shortcut details
- ➕ **Add shortcuts** through an intuitive modal interface
- ✏️ **Edit shortcuts** - Toggle edit mode to modify any shortcut
- 🗑️ **Delete shortcuts** - Remove shortcuts you no longer need
- 💾 **Auto-save** - Changes automatically save to the server
- 🔍 **URL anchors** - Share direct links to specific shortcuts

## Files

- `shortcuts.json` - The data file containing all shortcuts in the reference format
- `index.html` - The main website with dark theme and card layout
- `screen.css` - Styling matching the reference site
- `server.js` - Node.js/Express server for API endpoints
- `package.json` - Node.js dependencies
- `shortcuts.md` - Original markdown file (reference)
- `index-old.html` & `shortcuts-old.json` - Backup of previous format

## Usage

### Local Development

1. Install dependencies: `npm install`
2. Start the server: `npm start` (runs on http://localhost:3000)
3. Open your browser and navigate to the server URL
4. The website will automatically load shortcuts from the server

### Production Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to an Ubuntu server.

### Adding a New Shortcut

1. Click the **"+ Add Shortcut"** button (bottom left)
2. Fill in the form:
   - **Title**: Name of the shortcut (e.g., "Select all")
   - **Shortcut**: The keyboard shortcut (e.g., "A")
   - **Content**: One description per line. Use `<em class="shortcut">Key</em>` to highlight keys
   - **Tags**: Comma-separated tag numbers (1=General, 2=Navigation, 3=Selection, 4=Modeling, 5=Beginner, 6=Wizard)
3. Click **Save**

### Editing a Shortcut

1. Click **"Edit Mode"** button (bottom left) to enable editing
2. Hover over any shortcut card to see Edit/Delete buttons
3. Click **"Edit"** to modify the shortcut
4. Make your changes and click **Save**
5. Click **"View Mode"** to exit edit mode

### Filtering Shortcuts

1. Click the **menu button** (☰) in the top right
2. Select a tag to filter shortcuts:
   - **All** - Show all shortcuts
   - **General** - General purpose shortcuts
   - **Navigation** - Viewport and navigation shortcuts
   - **Selection** - Selection-related shortcuts
   - **Modeling** - Modeling and mesh editing shortcuts
   - **Beginner** - Essential shortcuts for beginners
   - **Wizard** - Advanced power-user shortcuts

### Collapsing/Expanding Content

- Click on a shortcut card header to expand/collapse its details
- Click **"Collapse"** button (top right) to collapse all shortcuts
- Click **"Expand"** to show all shortcut details

## API Endpoints

The server provides two REST API endpoints:

- `GET /api/shortcuts` - Retrieve all shortcuts
- `POST /api/shortcuts` - Save shortcuts (expects JSON body)

The frontend automatically uses these endpoints when running with the server.

## JSON Structure

The JSON file follows this structure (matching the reference site format):

```json
{
  "shortcuts": [
    {
      "id": "SelectAll",
      "title": "Select all",
      "shortcut": "A",
      "content": [
        "Use <em class=\"shortcut\">A</em> to select all objects.",
        "<em class=\"shortcut\">Alt</em> + <em class=\"shortcut\">A</em> to deselect all."
      ],
      "tags": [1, 3]
    }
  ]
}
```

### Tag Reference

- `1` - General
- `2` - Navigation
- `3` - Selection
- `4` - Modeling
- `5` - Beginner
- `6` - Wizard

### Content Formatting

In the `content` array, you can use HTML:
- `<em class="shortcut">Key</em>` - Highlights keyboard shortcuts
- `<em class="important">Term</em>` - Highlights important terms
- Regular HTML tags for formatting

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Requires a server for full functionality (editing/saving).

## Tips

- Use tag filtering to quickly find shortcuts by category
- Click on shortcut cards to expand and see detailed information
- Enable edit mode to add, modify, or remove shortcuts
- Changes are automatically saved to the server
- Share direct links to shortcuts using URL anchors (e.g., `#SelectAll`)

## Credits

Design and structure inspired by [hollisbrown/blendershortcuts](https://github.com/hollisbrown/blendershortcuts).
