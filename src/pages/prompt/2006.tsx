import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "网络小说写作 step5: 章节粗生成",
    "prompt": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n你的工作是写每个章节的情节，每个章节之间需要逻辑上衔接紧密。不要花哨，你想用尽可能少的词来传达信息，但这些话应该包含很多信息。\n根据这个情节，生成[10]章情节: []",
    "description": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n你的工作是写每个章节的情节，每个章节之间需要逻辑上衔接紧密。不要花哨，你想用尽可能少的词来传达信息，但这些话应该包含很多信息。\n根据这个情节，生成[10]章情节: []",
    "remark": "粗生成章节"
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
  "id": 2006,
  "weight": 2000006
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
