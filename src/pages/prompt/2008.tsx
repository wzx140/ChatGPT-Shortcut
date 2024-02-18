import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "网络小说写作 step7: 章节生成",
    "prompt": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n用细腻的人物刻画和人物对话来写这本小说的第[一]章。这一章一共分为三部分，现在第[三]部分接着写 1000 字以上。以下是要遵循的情节：[]",
    "description": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n用细腻的人物刻画和人物对话来写这本小说的第[一]章。这一章一共分为三部分，现在第[三]部分接着写 1000 字以上。以下是要遵循的情节：[]",
    "remark": "根据章节生成具体内容，需要分成多个部分生成，不然字数太小"
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
  "id": 2008,
  "weight": 2000004
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
