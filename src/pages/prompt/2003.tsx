import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "网络小说写作 step2: 情节粗生成",
    "prompt": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n基于这个提示生成 10 个小说情节: []",
    "description": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n基于这个提示生成 10 个小说情节: []",
    "remark": "根据主题生成十个情节"
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
  "id": 2003,
  "weight": 2000009
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
