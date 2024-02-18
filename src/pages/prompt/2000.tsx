import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "笔记整理",
    "prompt": "我希望你充当一名笔记整理助理, 你将会面对[书名]这本书中的多条碎片化笔记, 你的任务是将碎片化的笔记按照逻辑性整理分类为多个标题, 每个标题下用结构化的文字表达。笔记一共分为[1]部分, 这是第[1]部分: []",
    "description": "我希望你充当一名笔记整理助理, 你将会面对[书名]这本书中的多条碎片化笔记, 你的任务是将碎片化的笔记按照逻辑性整理分类为多个标题, 每个标题下用结构化的文字表达。笔记一共分为[1]部分, 这是第[1]部分: []",
    "remark": "对笔记进行分类整理"
  },
  "en": {
    "title": "Note organization",
    "prompt": "I hope you can serve as a note organizing assistant. You will be faced with multiple fragmented notes in the book [title]. Your task is to logically organize and categorize the fragmented notes into multiple headings, with structured text used to express them under each heading. The notes are divided into [1] sections, which is the [1] section: []",
    "remark": "Classify and organize notes"
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
