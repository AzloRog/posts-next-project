https://posts-next-ntcjeyq7g-danis-projects-0a8c7752.vercel.app/  - vercel


Комментов много к постам не добавлял, в посте номер 2 и 3 только есть.

Имплементировать логику с ошибками к сожалению не успел.

Пагинация происходит на стороне сервера.

По умолчанию пагинация выводит по 10 постов, можно изменить путем передачи query `perPage` запроса в адрессной строке - "?perPage=20" //конвенцию по именам query к сожалению упустил в этом проекте.

Кеширование используется от Next js, все данные кешируются и ревалидируются после POST действия но не хватило времени почитать документацию о том как записать данные в кеш, данные после добавления поста просто берутся из api и кешируются. (мог сделать и на React query 
т.к. опыт создания пет проектов с использовать Redux есть),

api endpoints разделены т.е. comments и posts отдельные ендпоинты, каждый comment имеет поле 'postId' с id поста которому он принадлежит

Позже дополню ещё по каким либо моментам.
