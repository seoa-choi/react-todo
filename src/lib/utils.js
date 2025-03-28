// person객체로 url 아이디에 대한 url 리턴
export function getImageUrl(person, size = 's') {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}
