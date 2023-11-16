// import courses from "./courses.json" with { type: "json" };
// import modules from "./modules.json"
// import assignments from "./assignments.json"
// import users from "./users.json"
// import grades from "./grades.json"
// import enrollments from "./enrollments.json"

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const courses = require("./courses.json");
const modules = require("./modules.json");
const assignments = require("./assignments.json");
const users = require("./users.json");
const grades = require("./grades.json");
const enrollments = require("./enrollments.json");

export default {
    courses,
    modules,
    assignments,
    users,
    grades,
    enrollments,
};
