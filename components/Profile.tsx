import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
export default function Profile() {
  return (
    <div className="flex items-center px-5 ">
      <div>
        <CiShoppingBasket
          size="32"
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-900 dark:ring-gray-900"
        />
      </div>
      <div className="flex items-center px-3 ml-2 ">
        <div className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-900 dark:ring-gray-300">
          <img
            src="https://s3-alpha-sig.figma.com/img/37d7/e1a0/a2aac8d00cff2c365972963f4cef560a?Expires=1702857600&Signature=OPofroe9uDDi79-oZFghiRj3zZAMGyW6g6HN1Tpz2Rt~iFBxJdKYM4hsoBxMnKUk8w3oddoGMp68eL6ZrF568D4NZshthttI~YPrelXWJy1XzgRgG~d95wL-ch4E9piEh~uD1CaK~c5qR504NZZfRuSDbEJ-udJM-OmQOi~sVdVaJdQUOIn3TGXY4Vatj7zYS2V8EXLQDDkURxrwTUBVIViG3uMoafafvgq3TgQ3wwxBbzx7Wndew8nLyb7GGxqBZajrL0V0HS7KgGjIBYIFkXoYVKCxHGywcaHTtBHrEsZzG8KEBxfKQpX0A7YH9lypP8p3UnTZhDXeBl7l3KN7ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Rounded avatar"
          ></img>
        </div>
      </div>
    </div>
  );
}
