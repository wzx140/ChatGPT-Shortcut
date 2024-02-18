import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "笔记整理",
    "prompt": "我希望你充当一名笔记整理助理, 你将会面对[书名]这本书中的多条笔记, 你的任务是将笔记按照逻辑进行整理, 注意用结构化的文字表达。笔记一共分为[1]部分, 这是第[1]部分: []",
    "description": "我希望你充当一名笔记整理助理, 你将会面对[书名]这本书中的多条笔记, 你的任务是将笔记按照逻辑进行整理, 注意用结构化的文字表达。笔记一共分为[1]部分, 这是第[1]部分: []",
    "remark": "对笔记进行分类整理"
  },
  "en": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "ja": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "ko": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "es": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "fr": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "de": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "it": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "ru": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "pt": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "hi": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "ar": {
    "title": "null",
    "prompt": "null",
    "description": "null",
    "remark": "null"
  },
  "bn": {
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
  "id": 2000,
  "weight": 14572
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
