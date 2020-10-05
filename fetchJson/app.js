"use strict";
/**
 * @author Chad Koslovsky <chad@technomnancy.it>
 * @file Description
 * @desc Created on 2020-10-05 3:40:17 pm
 * @copyright TechnomancyIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'http://jsonplaceholder.typicode.com/todos/1';
(async () => {
    const response = await axios_1.default.get(url);
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
})();
const logTodo = (id, title, completed) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    is it finished ${completed}
  `);
};
