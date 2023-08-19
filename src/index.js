import { makeProject, projectsArray } from "./modules/new-project";
import {
  makeHeader,
  makeProjectContent,
  makeFooter,
  makeNewProject,
} from "./modules/projects-view";
import { makeNewProjectEvent, deleteProjectEvent } from "./modules/events";
import "./style.css";
import "normalize.css";

makeHeader();
makeProjectContent();
makeNewProjectEvent();
deleteProjectEvent();
makeFooter();

console.log("hola");
