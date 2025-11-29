# Blender Cheat Sheet

## Selection & Navigation

| Action | Shortcut |
|--------|----------|
| Select all | A |
| Deselect all | Alt+A |
| Box select | B |
| Circle select | C |
| Back to normal select | W or Escape |
| Unhide all | Alt+H |
| Zoom to selected (Outliner) | Numpad . |

## Object Operations

| Action | Shortcut |
|--------|----------|
| Duplicate (independent copy) | Shift+D |
| Duplicate (linked instance) | Alt+D |
| Join objects | Ctrl+J |
| Separate by loose parts | P → By Loose Parts (in Edit Mode) |
| Set origin to geometry | Right-click → Set Origin → Origin to Geometry |
| Mirror | Ctrl+M → X/Y/Z |
| Apply transforms | Ctrl+A |

## Parenting

| Action | Shortcut |
|--------|----------|
| Parent to object | Select children, Shift+click parent, Ctrl+P → Object |
| Clear parent | Alt+P |

**Note:** "Loop in parents" error = circular reference. Clear parent first with Alt+P.

## Keyframing & Animation

| Action | Shortcut |
|--------|----------|
| Insert keyframe | I |
| Keyframe specific value | Hover over value, press I |

**Keyframe options:**
- All Channels = location, rotation, scale
- Selected Channels = only what's selected in Dope Sheet
- In Active Group = specific channel group

## 3D Cursor & Pivot Point

| Action | Shortcut |
|--------|----------|
| Cursor to Selected | Shift+S → Cursor to Selected |
| Selection to Cursor | Shift+S → Selection to Cursor |
| Cursor to World Origin | Shift+S → Cursor to World Origin |
| Change Pivot Point | . (period) → choose pivot |

**For mirroring around center:**
1. Shift+S → Cursor to World Origin
2. . (period) → 3D Cursor
3. Ctrl+M → X/Y/Z

**Note:** If "Cursor to Selected" puts cursor at origin, the object's origin is at (0,0,0) but geometry is elsewhere. Go into Edit Mode, select all (A), then Shift+S → Cursor to Selected.

## UV Mapping

| Action | Shortcut |
|--------|----------|
| Unwrap | U (in Edit Mode) |
| Smart UV Project | U → Smart UV Project |

**Important:** Check UV Maps in Data Properties (green triangle). The "active render" camera icon must be checked, and make sure correct UV map is active (not "automap").

## Instances

- **Alt+D** creates linked instance (shares mesh data)
- **Shift+D** creates independent copy
- To verify instance: check mesh name in Object Data Properties — number shows how many objects share it
- To make instance independent: Object → Relations → Make Single User → Object & Data
- Continue instance chain with **Alt+D** from any instance

## Proportional Editing

| Action | Shortcut |
|--------|----------|
| Toggle on/off | O |

**Warning:** If everything moves when you move one object, proportional editing is ON. Press O to turn it off.

## Modifiers & Collections

**Collection Instance:**
- Add → Collection Instance → pick collection
- Or: Shift+A → Collection Instance

**Exclude from View Layer:**
- Checkbox in Outliner — removes collection entirely from view layer
- Different from eye icon (hide) which is temporary

**Boolean Modifier:**
- Used for wipe/reveal effects
- Intersect = only show overlapping geometry

## Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Circle around cursor | Circle Select is on. Press W to exit |
| Everything moves together | Proportional Editing is on. Press O |
| "Active object is not a selected mesh" | Shift+click the mesh last so it's active |
| Object greyed out in Outliner | Check parent, collection, or instancing |
| Instance texture not showing | Check UV map active render icon in Data Properties |
| Geometry nodes slowing scene | Disable in modifier panel (monitor icon) |

## Useful View Modes

| Action | Shortcut |
|--------|----------|
| Toggle Edit/Object mode | Tab |
| Wireframe view | Z → Wireframe |
| Solid view | Z → Solid |

## Tips

- **Repeat last action:** Shift+R
- **Fine control on values:** Shift+drag
- **Copy location between objects:** Use 3D cursor method (Shift+S)
- **Select all in collection's children:** Select objects, Shift+L → Object Data
