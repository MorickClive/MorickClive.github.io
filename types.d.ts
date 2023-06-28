import { EnumType, JsxElement } from "typescript"

type SkillList = {
  "Header": string,
  "List": Array<string>
}

type BlogSection = {
  "title": string | null,
  "content": string
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

type Project = {
  "id" : string,
  "title" : string,
  "type": string,
  "banner_image" : string,
  "description" : string
}
