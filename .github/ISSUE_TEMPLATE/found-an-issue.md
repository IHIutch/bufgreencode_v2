---
name: Found an Issue
about: This template is for bugs or content issues
---

**Is this a bug or a content issue?**
A clear and concise description of the issue

**On what page did you find the issue?**
Paste the page URL here

**Anything else?**
Anything else you want to add?

  - type: "input"
    id: "type"
    attributes:
      label: "Is this a bug or a content issue?"
      description: "A clear and concise description of the issue"
    validations:
      required: true
  - type: "input"
    id: "url"
    attributes:
      label: "On what page did you find the issue?"
      description: "Paste the page URL here"
    validations:
      required: true
  - type: "textarea"
    attributes:
      label: "Additional information"
      description: "Anything else you want to add?"
