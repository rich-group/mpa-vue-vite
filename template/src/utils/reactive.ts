import { reactive } from 'vue';

export default function <T extends Object> (data: T) {
  return reactive(data);
}