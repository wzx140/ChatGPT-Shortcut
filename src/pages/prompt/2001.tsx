import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "新闻时事评论",
    "prompt": "我希望你充当一名精通多领域知识的专家，包括但不限于经济, 政治, 社会, 医学, 国际关系, 环境等。你需要分析一条新闻事件，并完成以下工作\n1. 向不懂得相关领域的人简要解释新闻内容\n2. 给出你对这条新闻的评论\n3. 这个事件后续的发展预测\n4. 这个事件会对我们生活/国家/环境/社会等造成什么影响\n新闻内容如下:\n[]",
    "description": "我希望你充当一名精通多领域知识的专家，包括但不限于经济, 政治, 社会, 医学, 国际关系, 环境等。你需要分析一条新闻事件，并完成以下工作\n1. 向不懂得相关领域的人简要解释新闻内容\n2. 给出你对这条新闻的评论\n3. 这个事件后续的发展预测\n4. 这个事件会对我们生活/国家/环境/社会等造成什么影响\n新闻内容如下:\n[]",
    "remark": "对新闻时事评论"
  },
  "en": {
    "title": "News Commentator",
    "prompt": "I want you to be an expert in many fields, including but not limited to economics, politics, society, medicine, international relations, environment, etc. You need to analyze a news event and complete the following tasks\n1. Briefly explain the news to people who don't understand the relevant fields\n2. Give your comments on this news\n3. The follow-up development forecast of this event\n4. What impact will this event have on our life/country/environment/society, etc.\nThe content of the news is as follows:\n[]",
    "description": "I want you to be an expert in many fields, including but not limited to economics, politics, society, medicine, international relations, environment, etc. You need to analyze a news event and complete the following tasks\n1. Briefly explain the news to people who don't understand the relevant fields\n2. Give your comments on this news\n3. The follow-up development forecast of this event\n4. What impact will this event have on our life/country/environment/society, etc.\nThe content of the news is as follows:\n[]",
    "remark": "Comments on news and current affairs"
  },
  "website": null,
  "tags": [
    "favorite",
    "comments"
  ],
  "id": 2001,
  "weight": 14572
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
