import { JsxElement } from "typescript"

type SkillList = {
  "Header": string,
  "List": Array<string>
}

type BlogSection = {
  "title": string | null,
  "content": JsxElement
}

type BlogMeta = {
  "date": string;
}

type BlogPost = {
  "mainTitle": string,
  "intro": BlogSection | null,
  "body": BlogSection | null,
  "ending": BlogSection | null,
  "meta": BlogMeta
}
