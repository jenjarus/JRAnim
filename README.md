# JRAnimation

JenjaRusAnimation - скрипт добавления анимации при скролле страницы

[DEMO](http://jenjarus.github.io/jranim/index.html)

## Документация

### Подключение

Подключите к проекту файлы из папки dist
- jranim.min.js
- jranim.min.css

### Базовое использование

- HTML

```html
  <section class="anim"></section>
  <section class="anim anim-left"></section>
  <section class="anim anim-top"></section>
```

- JavaScript

```javascript
  JRAnim();
```

### Расширенное использование

- JavaScript

```javascript
  JRAnim({
      animElem: '.anim', // Селектор CSS анимированного элемента (по умолчанию класс anim) 
      animClass: 'anim-show', // Класс CSS анимации (по умолчанию класс anim-show) 
      animToggle: true, // Сброс анимации при выходе за пределы экрана
      offset: 1, // Расстояние до элемента при срабатывании анимации (по умолчанию 1%)
      // (пишется в процентах от 0 до 100)
  });
```

#
Copyright (c) 2022 JenjaRus
