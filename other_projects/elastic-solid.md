---
title: Elastic-solids for Unity

layout: layouts/project.njk

image: /img/elastic-solid/icon.png

tech: [csharp, unity]

description: Elastic-solid object for Unity using TetGen.

repository: https://github.com/gaeqs/ElasticSolid

repository_type: github

date: 2021-05-01

---

## Introduction

This set of scripts can be used to generate elastic solids in Unity.

The script requires a .node, .ele and .face files that can be generated using TetGen and a mesh wrapping the mesh you want to use. The script is prepared to do this job automatically using a modified version of TetGen.
Unfortunately, I cannot share the modified TetGen due to licensing issues.

<video muted loop controls preload="metadata">
  <source src="/img/elastic-solid/video_1.mp4" type="video/mp4">
</video>


## Features

- Basic forces (Gravity, Spring).
- Volume-based force that prevents the mesh from being deformed.
- Custom TetGen parser.
- Automatic spring generator.
- Substeps.
- Damping force.
- Wing force.
- Penalty collisions (normal and implicit modes).
- Fixers with mobility options.
- Optimized code.
