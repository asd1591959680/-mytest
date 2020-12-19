import { request } from "./request.js";

export function getData() {
  return request({
    url: "/webflux/test/33",
  });
}
