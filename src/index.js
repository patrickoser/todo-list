import { makeProject, projectsArray } from "./modules/new-project";
import {
  makeHeader,
  makeProjectContent,
  makeFooter,
} from "./modules/projects-view";
import "./style.css";
import "normalize.css";

makeHeader();
makeProjectContent();
makeFooter();

console.log("hola");
