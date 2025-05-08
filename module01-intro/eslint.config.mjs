/*
ESLint 설정을 정의하는 파일

ESLint란?
ESLint는 JavaScript코드에서 발견된 문제점을 보고하고 자동으로 수정하는데 사용되는
정적 분석도구인 린터(Linter)이다.
코드의 잠재적인 오류, 문법적인 문제, 코드 스타일 불일치 등을 검사하여
코드 품질을 높이고 개발자들이 일관된 코딩 컨벤션을 따르도록 돕는다.
*/

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
