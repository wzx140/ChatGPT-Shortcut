import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "网络小说写作 step6: 章节精修",
    "prompt": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n你的工作是把你的学生对网文故事情节的草拟初稿，并重写它，以一种远超学生版本的方式。它应该有相同数量的章节，但应该在尽可能多的方面进行改进。\n这是他们写的故事情节草稿: []",
    "description": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n你的工作是把你的学生对网文故事情节的草拟初稿，并重写它，以一种远超学生版本的方式。它应该有相同数量的章节，但应该在尽可能多的方面进行改进。\n这是他们写的故事情节草稿: []",
    "remark": "对粗生成章节进行精修，章节记得保存一下"
  },
  "en": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "website": null,
  "tags": [
    "favorite",
    "write"
  ],
  "id": 2007,
  "weight": 2000005
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
