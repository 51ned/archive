<!DOCTYPE HTML>

<html>

<head>
    <meta charset="utf-8">
    <meta name="yandex-verification" content="b88834d57d01c934">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>
        <?php
            include "php/content.php";
            echo $multiTitle;
        ?> - ЭКЦ «Вектор»
    </title>
    <link rel="stylesheet" type="text/css" href="css/uikit.min.css">
    <link rel="stylesheet" type="text/css" href="css/components/sticky.min.css">
    <link rel="stylesheet" type="text/css" href="css/components/accordion.min.css">
    <link rel="stylesheet" type="text/css" href="css/components/slidenav.min.css">
    <link rel="stylesheet" type="text/css" href="css/mediaelementplayer.min.css">
    <link rel="stylesheet" type="text/css" href="css/tm-navbar.css">
    <link rel="stylesheet" type="text/css" href="css/tm-style.css">
    <link rel="stylesheet" type="text/css" href="css/tm-fonts.css">
    <link rel="stylesheet" type="text/css" href="css/tm-mouse.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,300,500&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Exo+2:300,300i,400,500&amp;subset=cyrillic" rel="stylesheet">
</head>

<body>

<div class="uk-container uk-container-center uk-margin-top uk-padding-remove">
    <nav class="uk-navbar" data-uk-sticky="{}"><!-- Меню -->
        <ul class="uk-navbar-nav" data-uk-scrollspy-nav="{closest:'li', smoothscroll:{offset:55}}">
            <li><a href="#header"><i class="uk-icon-home uk-icon-small"></i></a></li>
            <li><a href="#company">О компании</a></li>
            <li><a href="#expert">Эксперты</a></li>
            <li><a href="#programm">Программы</a></li>
            <li><a href="#price">Стоимость</a></li>
            <li><a href="#contact">Контакты</a></li>
        </ul>
        <div class="uk-navbar-content uk-navbar-flip"><!-- Кнопка формы обратной связи -->
            <button class="uk-button uk-contrast" data-uk-modal="{target:'#feedback'}">Заявка on-line</button>
        </div>
    </nav>
</div>

<div id="header" class="uk-container uk-container-center uk-margin-top tm-background-white tm-shadow">
    <div class="uk-grid tm-margin-top-35 tm-margin-bottom-35">
        <div class="uk-width-1-3 uk-text-left uk-vertical-align"><!-- Адрес -->
            <div class="uk-vertical-align-middle">
                <span class="uk-text-large">Армянский пер., д. 9с1</span><br>
                <a class="tm-link-dashed" href="#contact" title="Посмотреть адрес на карте" data-uk-scrollspy="{closest:'li', smoothscroll:{offset:50}}">Адрес на карте</a>
            </div>
        </div>
        <div class="uk-width-1-3 uk-text-center uk-vertical-align"><!-- Логотип -->
            <div class="uk-vertical-align-middle">
                <img src="img/logo.png" width="49" height="49" alt="">
                <p class="uk-margin-remove tm-name">Вектор</p>
            </div>
        </div>
        <div class="uk-width-1-3 uk-text-right uk-vertical-align"><!-- Телефон -->
            <div class="uk-vertical-align-middle">
                <span class="uk-text-large"><i class="uk-icon-phone"></i> <span class="ya-phone-1">+7 495 <span class="tm-subhead">507-86-79</span></span></span><br>
                понедельник - пятница, 09<sup>00</sup> - 21<sup>00</sup>
            </div>
        </div>
    </div>
</div>

<div class="uk-margin-top tm-header-border">
    <header class="uk-container uk-container-center">
        <h1 class="uk-text-contrast uk-text-center">
            <?php
                include "php/content.php";
                echo $multiTitle;
            ?>
        </h1>
        <?php
            include "php/content.php";
            echo $multiText;
        ?>
    </header>
</div>

<div id="company" class="uk-container uk-container-center uk-margin-top tm-background-white tm-shadow"><!-- О компании -->
    <h2 class="uk-h1 uk-text-center">О компании</h2>
    <p class="uk-text-justify">
        ООО Экспертно-консультационный центр «Вектор» – компания, созданная бывшим руководителем отдела автотехнических экспертиз <abbr title="Российский Федеральный Центр Судебной Экспертизы при МЮ РФ">РФЦСЭ</abbr> Котовым А.В. в 2006 г. Нашей задачей является применение опыта государственных экспертных учреждений, но в разумные сроки и по ценам рынка. На сегодняшний день ЭКЦ «Вектор» – это:
    </p>
    <div class="uk-grid uk-grid-small">
        <div class="uk-width-1-3"><!-- Эксперты -->
            <div class="uk-panel uk-panel-box uk-text-center tm-margin-top-55 tm-padding-top-35">
                <div class="tm-icon-wrapper">
                    <div class="uk-thumbnail uk-border-circle">
                        <div class="uk-border-circle tm-icon-container">
                            <i class="uk-icon-group uk-icon-medium uk-text-contrast"></i>
                        </div>
                    </div>
                </div><br>
                <span class="tm-subhead">Эксперты</span>
                <p class="uk-text-justify">
                    Вы ведь не доверите свою проблему «специалисту», который купил короткие курсы повышения квалификации в частной компании? Наши сотрудники прошли обучение и (или) имеют опыт работы в государственных экспертных учреждениях – МВД и РФЦСЭ.
                </p>
            </div>
        </div>
        <div class="uk-width-1-3"><!-- Опыт -->
            <div class="uk-panel uk-panel-box uk-text-center tm-margin-top-55 tm-padding-top-35">
                <div class="tm-icon-wrapper">
                    <div class="uk-thumbnail uk-border-circle">
                        <div class="uk-border-circle tm-icon-container">
                            <i class="uk-icon-mortar-board uk-icon-medium uk-text-contrast"></i>
                        </div>
                    </div>
                </div><br>
                <span class="tm-subhead">Опыт</span>
                <p class="uk-text-justify">
                    Мы проводим экспертизы как в досудебном, так и в судебном порядках вот уже более 10 лет. Таким образом, с вашим случаем мы наверняка уже сталкивались и знаем, как нужно работать. Это касается как подготовки заключения, так и его защиты в суде.
                </p>
            </div>
        </div>
        <div class="uk-width-1-3"><!-- Инструменты -->
            <div class="uk-panel uk-panel-box uk-text-center tm-margin-top-55 tm-padding-top-35">
                <div class="tm-icon-wrapper">
                    <div class="uk-thumbnail uk-border-circle">
                        <div class="uk-border-circle tm-icon-container">
                            <i class="uk-icon-wrench uk-icon-medium uk-text-contrast"></i>
                        </div>
                    </div>
                </div><br>
                <span class="tm-subhead">Инструменты</span>
                <p class="uk-text-justify">
                    Помимо экспертов в штате и их опыта, у нас есть необходимые инструменты – лицензионные программные комплексы «PC-Crash» и «V-Sim». Более того, обращению с этими инструментами наши специалисты обучались у их создателей в Европе.
                </p>
            </div>
        </div>
    </div>
    <div class="uk-grid uk-grid-small tm-margin-bottom-35">
        <div class="uk-width-2-3">
            <div class="uk-panel uk-panel-box tm-border-red">
                <span class="tm-subhead">Уголовный процесс</span><!-- Уголовный процесс -->
                <p class="uk-text-justify">
                    Во исполнение требований пленума <abbr title="Верховный суд">ВС</abbr> РФ от 21 декабря 2010 г., для производства экспертиз в уголовном процессе мы создали автономную некоммерческую организацию «Межрегиональный Центр Судебной Экспертизы» (АНО «МЦСЭ»).
                </p>
            </div>
        </div>
        <div class="uk-width-1-3">
            <div class="uk-panel uk-panel-box uk-contrast tm-panel-box-blue">
                <span class="tm-subhead">Документы</span><!-- Документы -->
                <ul class="uk-list">
                    <li>
                        - <a href="doc/requisites.pdf" target="_blank">Карточки предприятий</a> (.pdf, 1,3 mb)
                    </li>
                    <li>
                        - <a href="doc/documents.pdf" target="_blank">Документы экспертов</a> (.pdf, 1,6 mb)
                    </li>
                    <li>
                        - <a href="doc/letters.pdf" target="_blank">Информационные письма</a> (.pdf, 1,9 mb)
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div id="expert" class="uk-container uk-container-center uk-margin-top tm-background-white tm-shadow"><!-- Эксперт -->
    <h3 class="uk-h1 uk-text-center uk-margin-bottom">Эксперт в штате</h3>
        <div class="uk-grid uk-grid-collapse"><!-- Анна Водолагина -->
            <div class="uk-width-1-2">
                <p class="uk-text">
                    <span class="tm-subhead">Анна Водолагина</span><br>
                    руководитель отдела трасологической экспертизы
                </p>
                <blockquote class="tm-margin-top-35">
                    Профильное высшее техническое образование, курсы повышения квалификации по транспортно-трасологической экспертизе, обучение работе в специализированных компьютерных программах по моделированию ДТП и участие в различных тематических конференциях дали отличную базу для развития в области транспортно-трасологической экспертизы. Совместная работа с ведущими экспертами (РФЦСЭ, МВД и МАДИ) дали незаменимый опыт работы в указанной сфере. За время работы произведено большое количество судебных экспертиз и досудебных исследований, по которым вынесены решения.
                </blockquote>
                <p class="tm-subhead tm-margin-top-35">Документы эксперта</p>
                <div class="uk-scrollable-box tm-scrollable-box">
                    <ul class="uk-list uk-list-line">
                        <li>
                            <p class="uk-text">
                                Высшее техническое образование МАДИ по специальности «Организация и безопасность дорожного движения»
                                <a class="tm-icon-link" href="img/vodolagina/1.jpg" data-uk-lightbox="{group:'vodolagina'}"><i class="uk-icon-file-image-o"></i></a>
                            </p>
                        </li>
                        <li>
                            <p class="uk-text">
                                Свидетельство о повышении квалификации Московского универститета МВД России
                                <a class="tm-icon-link" href="img/vodolagina/2.jpg" data-uk-lightbox="{group:'vodolagina'}"><i class="uk-icon-file-image-o"></i></a>
                            </p>
                        </li>
                        <li>
                            <p class="uk-text">
                                Сертификат соответствия по специальности «Основы судебной экспертизы и криминалистики»
                                <a class="tm-icon-link" href="img/vodolagina/3.jpg" data-uk-lightbox="{group:'vodolagina'}"><i class="uk-icon-file-image-o"></i></a>
                            </p>
                        </li>
                        <li>
                            <p class="uk-text">
                                Сертификат «Анализ ДТП с использованием компьютерной программы «PC-Crash»
                                <a class="tm-icon-link" href="img/vodolagina/4.jpg" data-uk-lightbox="{group:'vodolagina'}"><i class="uk-icon-file-image-o"></i></a>
                            </p>
                        </li>
                        <li>
                            <p class="uk-text">
                                Сертификат по пользованию программами фирмы «CYBID» для реконструкции и моделирования столкновений
                                <a class="tm-icon-link" href="img/vodolagina/5.jpg" data-uk-lightbox="{group:'vodolagina'}"><i class="uk-icon-file-image-o"></i></a>
                            </p>
                        </li>
                        <li>
                            <p class="uk-text">
                                Удостоверение о повышении квалификации по программе «Исследование видеозаписей ДТП»
                                <a class="tm-icon-link" href="img/vodolagina/6.jpg" data-uk-lightbox="{group:'vodolagina'}"><i class="uk-icon-file-image-o"></i></a>
                            </p>
                        </li>
                    </ul>
                </div>    
            </div>
            <div class="uk-width-1-2">
                <img class="uk-align-right" src="img/vodolagina/vodolagina.png" width="383" height="720" alt="Анна Водолагина">
            </div>
        </div>
    </div>

<div id="programm" class="uk-container uk-container-center uk-margin-top tm-background-white tm-shadow"><!-- Программы -->
    <h4 class="uk-h1 uk-text-center">Программы</h4>
    <p class="uk-text-justify">
        На Западе в целом и в Европе в частности, вопросы определения механизма ДТП решаются при помощи специальных компьютерных программ – таких, например, как «PC-Crash», «V-Sim» и «Carat». Мы обладаем лицензионными версиями указанных программ, а наши эксперты – обучены работе с ними. Ниже Вы можете ознакомиться с примером использования программы «PC-Crash» при производсве экспертизы.
    </p>
    <div class="uk-grid uk-grid-small uk-margin-large-bottom tm-margin-top-35">
        <div class="uk-width-1-2"><!-- Заключение эксперта -->
            <div class="uk-panel uk-panel-box">
                <p class="tm-subhead">Заключение эксперта</p>
                <p class="uk-text">
                    <a href="doc/conclusion.pdf" target="_blank">Текст заключения</a> (.pdf, 0,6 mb)
                </p>
                <p class="uk-text-justify">
                    Моделирование механизма ДТП. Проверка версий участников на предмет соответствия объективно-техническим данным.
                </p>
            </div>
            <div class="uk-width-1-1 uk-margin-top"><!-- Апробация -->
                <div class="uk-panel uk-panel-box tm-border-red">
                    <p class="tm-subhead">Апробация</p>
                    <ul class="uk-list">
                        <li>
                            - <a href="img/programms/pc-crash.jpg" data-uk-lightbox="{group:'programm'}">PC-Crash</a> (.jpg, 0,7 mb)
                        </li>
                        <li>
                            - <a href="img/programms/v-sim.jpg" data-uk-lightbox="{group:'programm'}">V-Sim</a> (.jpg, 0,5 mb)
                        </li>
                    </ul>
                    <p class="uk-text-justify">
                        Относительно недавно эти программы апробированы и рекомендованы к использованию государственными экспертными учреждениями.
                    </p>
                </div>
            </div>
        </div>
        <div class="uk-width-1-2"><!-- Визуализация -->
            <div class="k-panel uk-panel-box uk-margin-bottom">
                <p class="tm-subhead">Визуализация</p>
                <ul class="uk-tab" data-uk-tab="{connect:'#visualisation', animation:'fade'}">
                    <li class="uk-active"><a class="uk-text-center" href="">Версия первого участника</a></li>
                    <li><a class="uk-text-center" href="">Версия второго участника</a></li>
                </ul>
                <ul id="visualisation" class="uk-switcher">
                    <li>
                        <video class="mejs__player" data-mejsoptions='{"alwaysShowControls": "true"}' width="528" height="340">
                            <source type="video/mp4" src="video/1.mp4">
                        </video>
                    </li>
                    <li>
                        <video class="mejs__player" data-mejsoptions='{"alwaysShowControls": "true"}' width="528" height="340">
                            <source type="video/mp4" src="video/2.mp4">
                        </video>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div id="price" class="uk-container uk-container-center uk-margin-top tm-background-white tm-shadow"><!-- Стоимость услуг -->
    <h5 class="uk-h1 uk-text-center">Стоимость услуг</h5>
    <div class="uk-tab-center tm-tab-center">
        <ul class="uk-tab tm-prices-tab" data-uk-tab="{connect:'#prices', amnimation:'fade'}">
            <li class="uk-active"><a class="uk-text-center" href="">Трасологическая экспертиза</a></li>
            <li><a class="uk-text-center" href="">Экспертиза обстоятельств ДТП</a></li>
        </ul>
    </div>
    <p class="uk-text-justify">
        Стоимость исследования зависит от полноты исходных данных и перечня вопросов, на которые представляется ответить с экспертной точки зрения.
    </p>
    <ul id="prices" class="uk-switcher">
        <li><!-- Цены на трасу -->
            <table class="uk-table uk-table-striped uk-table-hover uk-margin-bottom">
                <thead>
                    <tr>
                        <th class="uk-contrast uk-text-center">Наименование услуги</th>
                        <th class="uk-text-center uk-contrast">Цена, руб.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tm-td-border-right">Исследование повреждений ТС на соответствие заявленным обстоятельствам</td>
                        <td class="uk-text-center">от 10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">Определение угла взаиморасположения ТС в момент первоначального контакта</td>
                        <td class="uk-text-center">от 10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">Установления факта движения или неподвижного состояния ТС в момент столкновения</td>
                        <td class="uk-text-center">от 10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">Определение места столкновения</td>
                        <td class="uk-text-center">от 15 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">Определение механизма ДТП в полном объеме</td>
                        <td class="uk-text-center">от 25 000</td>
                    </tr>
                </tbody>
            </table>
        </li>
        <li><!-- Цены на обстоятельства -->
            <table class="uk-table">
                <thead>
                    <tr>
                        <th class="uk-contrast uk-text-center">Наименование услуги</th>
                        <th class="uk-text-center uk-contrast">Цена, руб.</th>
                    </tr>
                </thead>
                <tbody class="uk-accordion" data-uk-accordion>
                    <tr>
                        <td class="tm-td-border-right">
                            Исследование ДТП по видеозаписи<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                                <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                    <li>
                                        <i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Что решается:</span><br>
                                        <ul class="uk-list">
                                            <li>определение скорости движения ТС и объектов;</li>
                                            <li>определение технической возможности предотвратить столкновение/наезд;</li>
                                            <li>установление пунктов ПДД, которыми должны были руководствоваться участники ДТП и т.д.</li>
                                        </ul>
                                    </li>
                                    <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> видеозапись, административный материал по ДТП</li>
                                    <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 3-х до 5-х рабочих дней</li>
                                </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">от 10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">Установление соответствия показаний водителей (свидетелей) объективно-техническим данным</td>
                        <td class="uk-text-center uk-table-middle">от 15 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Экспертиза наезда на пешехода<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                                <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                    <li>
                                        <i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Что решается:</span><br>
                                        <ul class="uk-list">
                                            <li>определение места наезда;</li>
                                            <li>определение скорости ТС в момент наезда;</li>
                                            <li>определение технической возможности предотвратить наезд на пешехода;</li>
                                            <li>определение технической возможности предотвратить наезд на пешехода.</li>
                                        </ul>
                                    </li>
                                    <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> административный материал по ДТП</li>
                                    <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 3-х до 5-х рабочих дней</li>
                                </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">от 20 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Экспертиза попутных столкновений ТС<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                                <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                    <li>
                                        <i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Что решается:</span><br>
                                        <ul class="uk-list">
                                            <li>определение механизма ДТП;</li>
                                            <li>определение угла взаиморасположения ТС в момент первоначального контакта;</li>
                                            <li>определение расположения ТС относительно границ проезжей части в момент столкновения;</li>
                                            <li>определение технической возможности снизить скорость до скорости впереди движущегося ТС<br> для избежания столкновения;</li>
                                            <li>установление пунктов ПДД, которыми должны были руководствоваться участники ДТП и т.д.</li>
                                        </ul>
                                    </li>
                                    <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> административный материал по ДТП</li>
                                    <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 3-х до 5-х рабочих дней</li>
                                </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">от 20 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Экспертиза встречных столкновений ТС<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                                <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                    <li>
                                        <i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Что решается:</span><br>
                                        <ul class="uk-list">
                                            <li>определение механизма ДТП;</li>
                                            <li>определение места столкновения;</li>
                                            <li>определение угла взаиморасположения ТС в момент первоначального контакта;</li>
                                            <li>определение расположения ТС относительно границ проезжей части в момент столкновения;</li>
                                            <li>установление пунктов ПДД, которыми должны были руководствоваться участники ДТП и т.д.</li>
                                        </ul>
                                    </li>
                                    <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> административный материал по ДТП</li>
                                    <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 3-х до 5-х рабочих дней</li>
                                </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">от 20 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Экспертиза перекрёстных столкновений ТС<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                                <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                    <li>
                                        <i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Что решается:</span><br>
                                        <ul class="uk-list">
                                            <li>определение механизма ДТП;</li>
                                            <li>определение места столкновения;</li>
                                            <li>определение скорости движения ТС;</li>
                                            <li>определение технической возможности предотвратить столкновение;</li>
                                            <li>установление пунктов ПДД, которыми должны были руководствоваться участники ДТП и т.д.</li>
                                        </ul>
                                    </li>
                                    <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> административный материал по ДТП</li>
                                    <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 3-х до 5-х рабочих дней</li>
                                </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">от 30 000</td>
                    </tr>
                </tbody>
            </table>
        </li>
    </ul>
    <div class="uk-grid uk-grid-small tm-margin-bottom-35">
        <div class="uk-width-1-3">
            <div class="uk-panel uk-panel-box tm-border-red">
                <p class="uk-text-justify">
                    При производстве экспертизы по определению суда или постановлению иных уполномоченных лиц, стоимость экспертизы возрастает на 10 000 руб.
                </p>
            </div>
        </div>
        <div class="uk-width-2-3">
            <div class="uk-panel uk-panel-box">
                <p class="uk-text-justify">
                    Перспектива проведения экспертизы и перечень вопросов, на которые имеется возможность ответить, определяется после ознакомления с материалами дела непосредственно эксперта. При ответе на 4 и более вопроса предусмотрены скидки. Стоимость экспертизы на практике варьируется от 15 000 до 60 000 руб.
                </p>
            </div>
        </div>
    </div>
</div>

<div id="contact" class="uk-container uk-container-center uk-margin-top uk-margin-bottom tm-background-white tm-shadow"><!-- Контактная информация -->
    <h6 class="uk-h1 uk-text-center">Контактная информация</h6>
    <div class="uk-grid uk-grid-small uk-margin-bottom" data-uk-grid-match="{target:'.uk-panel'}">
        <div class="uk-width-1-2"><!-- Контакты -->
            <div class="uk-panel uk-panel-box">
                <p class="uk-text-center tm-subhead">Офис ЭКЦ «Вектор»</p>
                <p class="uk-text">
                    Юридический и фактический адреса:<br>
                    101000, гор. Москва, Армянский пер., д. 9, стр. 1, офис 311
                </p>
                <p class="uk-text">
                    Телефон:<br>
                    <span class="ya-phone-1">+7 495 <span class="uk-text-bold">507-86-79</span></span>
                </p>
                <p class="uk-text">
                    E-mail:<br>
                    mail@ekc-vector.ru
                </p>
            </div>
        </div>
        <div class="uk-width-1-2"><!-- Форма обратной связи -->
            <div class="uk-panel uk-panel-box tm-border-red">
                <p class="uk-text-center tm-subhead">Заявка on-line</p>
                <p class="uk-text-center">
                    Оставьте Ваш номер телефона, и мы перезвоним<br>
                    втечение 30 минут!
                </p>
                <form id="tm-onpage-form" class="uk-form" autocomplete="off">
                    <p class="msgs"></p>
                    <input name="uname" type="text" class="uk-width-1-1" placeholder="Ваше имя">
                    <input name="uphone" type="tel" class="uk-width-1-1 uk-margin-top"pattern="^[ 0-9]+$" placeholder="Номер телефона">
                    <input name="formInfo" class="formInfo" type="hidden" value="onpage">
                    <input type="submit" class="uk-button uk-button-success uk-width-1-1 uk-margin-top" value="Оставить заявку">
                </form>
            </div>
        </div>
    </div>
    <div class="uk-width-1-1 tm-margin-bottom-35">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aece3c96eda648c73f667d1d1f7bba0f741d301819eddc2d9d84bd905ad4a8323&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
    </div>
</div>
<div>
    <div class="uk-block uk-block-secondary">
        <p class="uk-text-center uk-contrast">&copy; ООО ЭКЦ «Вектор»</p>
    </div>
</div>

</body>

<!-- Рабочие скрипты -->
<script src="js/jquery.min.js"></script>
<script src="js/uikit.min.js"></script>
<script src="js/form.js"></script>
<script src="js/components/sticky.min.js"></script>
<script src="js/components/lightbox.min.js"></script>
<script src="js/core/switcher.min.js"></script>
<script src="js/components/accordion.min.js"></script>
<script src="js/mediaelement-and-player.min.js"></script>

<!-- Яндекс-метрика -->
<script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(45334635, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/45334635" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

<!-- Gogle Analytics -->
<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-102929716-1', 'auto');
    ga('send', 'pageview');
</script>

<!-- Форма обратной связи -->
<div id="feedback" class="uk-modal">
    <div class="uk-modal-dialog">
        <a class="uk-modal-close uk-close"></a>
        <div class="uk-modal-header">
            <p class="tm-subhead uk-text-center">Заявка on-line</p>
        </div>
        <p class="uk-text-center">
            Оставьте Ваш номер телефона, и мы перезвоним<br>
            втечение 30 минут!
        </p>
        <form id="tm-modal-form" class="uk-form" autocomplete="off">
            <p class="msgs"></p>
            <input name="uname" type="text" class="uk-width-1-1" placeholder="Ваше имя">
            <input name="uphone" type="tel" class="uk-width-1-1 uk-margin-top"pattern="^[ 0-9]+$" placeholder="Номер телефона">
            <input name="formInfo" class="formInfo" type="hidden" value="modal">
            <div class="uk-modal-footer">
                <input type="submit" class="uk-button uk-button-success uk-width-1-1" value="Оставить заявку">
            </div>
        </form>
    </div>
</div>

</html>