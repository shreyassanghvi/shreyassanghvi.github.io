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
| `"active"` | 🔵 Blue | Live/deployed and actively maintained |
| `"in-progress"` | 🟡 Yellow | Currently working on it |
| `"archived"` | ⚪ Gray | No longer maintained |
| `"experimental"` | 🟣 Purple | Prototype/testing phase |

**Note:** If `status` is omitted, no badge will be displayed.

## Project Images

- Place project images in the `/public/project/` folder
- If no `imageUrl` is provided, a default banner will be used: `/project/default-project-banner.svg`

## Example

```json
[
  {
    "title": "HeartPrinter",
    "description": "A Cable Driven Parallel Wire robot for epicardial interventions.",
    "technologies": ["C/C++", "Python"],
    "status": "active",
    "githubUrl": "https://github.com/shreyassanghvi/heartprinter",
    "imageUrl": "/project/heartprinter.png"
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
