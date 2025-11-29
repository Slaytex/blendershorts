# Blender Shortcuts Reference Website

A beautiful, interactive website for managing and referencing Blender keyboard shortcuts.

## Features

- 📋 **Display all shortcuts** organized by category
- 🔍 **Search functionality** to quickly find shortcuts
- ➕ **Add new shortcuts** through an intuitive interface
- ✏️ **Edit existing shortcuts** inline
- 🗑️ **Delete shortcuts** you no longer need
- 📝 **Edit JSON directly** for advanced users
- 💾 **Download updated JSON** file

## Files

- `shortcuts.json` - The data file containing all shortcuts (editable)
- `index.html` - The main website (single file, no dependencies)
- `shortcuts.md` - Original markdown file (reference)

## Usage

### Viewing the Website

1. Simply open `index.html` in your web browser
2. The website will automatically load `shortcuts.json`
3. Use the search box to filter shortcuts
4. Browse shortcuts by category

### Adding a New Shortcut

1. Click the **"+ Add Shortcut"** button
2. Select an existing category or enter a new category name
3. Fill in:
   - **Action**: What the shortcut does (e.g., "Select all")
   - **Shortcut**: The keyboard shortcut (e.g., "A")
   - **Additional Info**: Optional notes or context
4. Click **Save**

### Editing a Shortcut

1. Find the shortcut you want to edit
2. Click the **"Edit"** button on that shortcut
3. Modify the fields as needed
4. Click **Save**

### Editing JSON Directly

1. Click **"Edit JSON"** button
2. Modify the JSON structure directly
3. Click **"Save JSON"** (validates before saving)
4. The website will update automatically

### Downloading Updated JSON

1. Click **"Download JSON"** button
2. The updated `shortcuts.json` file will be downloaded
3. Replace your existing `shortcuts.json` with the downloaded file

## JSON Structure

The JSON file follows this structure:

```json
{
  "categories": [
    {
      "name": "Category Name",
      "shortcuts": [
        {
          "action": "Action description",
          "shortcut": "Keyboard shortcut",
          "info": "Optional additional info"
        }
      ],
      "notes": [
        "Optional notes about the category"
      ]
    }
  ]
}
```

## Local Storage

The website uses browser localStorage as a backup. If you make changes and don't download the JSON, your changes are saved locally in your browser. To persist changes across devices, download the JSON file.

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No external dependencies required - it's a single HTML file!

## Tips

- Use the search box to quickly find shortcuts by action, shortcut key, or info
- Categories are automatically created when you add shortcuts to a new category name
- Empty categories are automatically removed when all shortcuts are deleted
- The JSON editor validates your JSON before saving to prevent errors

