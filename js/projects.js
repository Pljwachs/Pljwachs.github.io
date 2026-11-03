function createMedia(media) {
  const wrapper = document.createElement("div");
  wrapper.className = "project-media";

  if (media?.type === "video") {
    const video = document.createElement("video");
    video.src = media.src;
    video.playsInline = true;
    video.setAttribute("aria-label", media.alt);
    if (media.controls) {
      video.controls = true;
      video.preload = "metadata";
    } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.muted = true;
      video.loop = true;
      video.controls = true;
    } else {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
    }
    wrapper.append(video);
  } else if (media?.type === "image") {
    const image = document.createElement("img");
    image.src = media.src;
    image.alt = media.alt;
    image.loading = "lazy";
    wrapper.append(image);
  } else if (media?.type === "youtube") {
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${media.id}`;
    frame.title = media.alt;
    frame.loading = "lazy";
    frame.allowFullscreen = true;
    wrapper.append(frame);
  } else {
    wrapper.classList.add("project-media-empty");
    wrapper.textContent = "GIF or video goes here";
  }

  return wrapper;
}

function createList(className, items, fillItem) {
  const list = document.createElement("ul");
  list.className = className;
  for (const item of items) {
    const entry = document.createElement("li");
    fillItem(entry, item);
    list.append(entry);
  }
  return list;
}

function createProject(project) {
  const card = document.createElement("article");
  card.className = "project";

  const title = document.createElement("h3");
  const titleLink = document.createElement("a");
  titleLink.href = `project.html?id=${encodeURIComponent(project.id)}`;
  titleLink.textContent = project.title;
  title.append(titleLink);

  const description = document.createElement("p");
  description.textContent = project.description;

  card.append(createMedia(project.media), title, description);

  if (project.tags?.length) {
    card.append(createList("tags", project.tags, (entry, tag) => {
      entry.textContent = tag;
    }));
  }

  const linkList = createLinks(project.links ?? []);
  const more = document.createElement("a");
  more.href = titleLink.href;
  more.textContent = "Details →";
  linkList.prepend(document.createElement("li"));
  linkList.firstChild.append(more);
  card.append(linkList);

  return card;
}

function createLinks(links) {
  return createList("links", links, (entry, link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.label;
    entry.append(anchor);
  });
}

function createProjectPage(project) {
  const page = document.createDocumentFragment();

  const title = document.createElement("h1");
  title.textContent = project.title;

  const summary = document.createElement("p");
  summary.className = "lead";
  summary.textContent = project.description;

  page.append(title, summary);

  if (project.tags?.length) {
    const tags = createList("tags", project.tags, (entry, tag) => {
      entry.textContent = tag;
    });
    page.append(tags);
  }

  page.append(createMedia(project.detailMedia ?? project.media));

  const body = document.createElement("div");
  body.className = "project-body";
  for (const text of project.details ?? []) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    body.append(paragraph);
  }
  page.append(body);

  if (project.links?.length) {
    page.append(createLinks(project.links));
  }

  return page;
}

const projectList = document.getElementById("project-list");
if (projectList) {
  projectList.append(...PROJECTS.map(createProject));
}

const projectPage = document.getElementById("project-page");
if (projectPage) {
  const id = new URLSearchParams(location.search).get("id");
  const project = PROJECTS.find((entry) => entry.id === id);
  if (project) {
    document.title = `${project.title} | Ping-Jung Wu`;
    projectPage.append(createProjectPage(project));
  } else {
    projectPage.textContent = "Project not found.";
  }
}
