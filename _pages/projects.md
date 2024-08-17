---
layout: page
title: projects
permalink: /projects/
description: A collection of class and personal projects for CS and design. After taking DESINV 22 (Prototyping and Fabrication) @ UC Berkeley, I discovered that I enjoy design (primarily prototyping). While I’m not the conventional designer that specializes in making things look aesthetically pleasing, I lean towards physical design and creating useful products since I prioritize utility and optimization. I've completed Berkeley's Certificate in Design Innovation and SCET's Certificate in Entrepreneurship & Technology due to my interest in design and hope to get more involved with human-centered interaction research and robotics. In the meantime, my goal is to one day own my personal 3D printer and laser cutter (Glowforge 👀) in my home.
nav: true
nav_order: 3
display_categories:
  [CS 184&#58; Computer Graphics, DESINV 23&#58; Creative Programming & Electronics, DESINV 22&#58; Prototyping & Fabrication, Design, UI/UX]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
