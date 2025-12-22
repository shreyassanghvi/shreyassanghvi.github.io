# Projects Data

This folder contains project data displayed on the portfolio website.

## Project Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ Yes | Project name |
| `description` | string | ✅ Yes | Brief project description |
| `technologies` | string[] | ✅ Yes | Array of technologies used |
| `status` | string | ❌ No | Current project status (see below) |
| `githubUrl` | string | ❌ No | GitHub repository URL |
| `liveUrl` | string | ❌ No | Live demo/deployment URL |
| `imageUrl` | string | ❌ No | Project screenshot/image path |

## Available Status Options

| Status | Badge Color | Use Case |
|--------|-------------|----------|
| `"completed"` | 🟢 Green | Project is finished |
| `"in-progress"` | 🟡 Yellow | Currently working on it |
| `"active"` | 🔵 Blue | Live/deployed and actively maintained |
| `"experimental"` | 🟣 Purple | Prototype/testing phase |
| `"archived"` | ⚪ Gray | No longer maintained |

**Note:** If `status` is omitted, no badge will be displayed.

## Example

```json
[
  {
    "title": "HeartPrinter",
    "description": "A Cable Driven Parallel Wire robot for epicardial interventions.",
    "technologies": ["C/C++", "Python"],
    "status": "active",
    "githubUrl": "https://github.com/shreyassanghvi/heartprinter",
    "imageUrl": "/images/project-screenshot.png"
  },
  {
    "title": "Another Project",
    "description": "Description here...",
    "technologies": ["React", "TypeScript", "Next.js"],
    "status": "in-progress",
    "githubUrl": "https://github.com/username/project",
    "liveUrl": "https://project-demo.com"
  }
]
```
