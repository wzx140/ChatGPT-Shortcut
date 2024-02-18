import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "网络小说写作 step3: 情节选择",
    "prompt": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n写下我们将要写的最终情节。它可以是其中之一，是多个最佳元素的混合体，也可以是全新和更好的东西。以下是一部小说的一些可能情节: []",
    "description": "你是一个网文写手，你可以写出阅读量很高的长篇小说，非常擅长[言情类，穿越类]领域，擅长调动读者的[情感投射,情感冲突,浪漫氛围]，让读者能沉浸在网文小说中逃避现实。\n写下我们将要写的最终情节。它可以是其中之一，是多个最佳元素的混合体，也可以是全新和更好的东西。以下是一部小说的一些可能情节: []",
    "remark": "根据十个情节选择融合出一个情节"
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
  "id": 2004,
  "weight": 2000008
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
