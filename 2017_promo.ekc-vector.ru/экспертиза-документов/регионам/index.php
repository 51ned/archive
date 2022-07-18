<!DOCTYPE HTML>

<html>

<head>
    <meta charset="utf-8">
    <meta name="yandex-verification" content="b88834d57d01c934">
    <link rel="shortcut icon" href="../../favicon.ico" type="image/x-icon">
    <title>Экспертиза документов, почерка и подписи - ЭКЦ «Вектор»</title>
    <link rel="stylesheet" type="text/css" href="../../css/uikit.min.css">
    <link rel="stylesheet" type="text/css" href="../../css/components/sticky.min.css">
    <link rel="stylesheet" type="text/css" href="../../css/components/accordion.min.css">
    <link rel="stylesheet" type="text/css" href="../../css/components/slidenav.min.css">
    <link rel="stylesheet" type="text/css" href="../../css/tm-navbar.css">
    <link rel="stylesheet" type="text/css" href="../../css/tm-style.css">
    <link rel="stylesheet" type="text/css" href="../../css/tm-fonts.css">
    <link rel="stylesheet" type="text/css" href=".../../css/tm-mouse.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,300,500&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Exo+2:300,300i,400,500&amp;subset=cyrillic" rel="stylesheet">
    <script src="../../js/jquery.min.js"></script>
    <script src="../../js/uikit.min.js"></script>
    <script src="../../js/form.js"></script>
    <script src="../../js/components/sticky.min.js"></script>
    <script src="../../js/components/lightbox.min.js"></script>
    <script src="../../js/core/switcher.min.js"></script>
    <script src="../../js/components/accordion.min.js"></script>
</head>

<body>

<div class="uk-container uk-container-center uk-margin-top uk-padding-remove">
    <nav class="uk-navbar" data-uk-sticky="{}"><!-- Меню -->
        <ul class="uk-navbar-nav" data-uk-scrollspy-nav="{closest:'li', smoothscroll:{offset:55}}">
            <li><a href="#header"><i class="uk-icon-home uk-icon-small"></i></a></li>
            <li><a href="#company">О компании</a></li>
            <li><a href="#expert">Эксперт</a></li>
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
                <span class="uk-text-large">Варшавское ш-се, д. 17</span><br>
                <a class="tm-link-dashed" href="#contact" title="Посмотреть адрес на карте" data-uk-scrollspy="{closest:'li', smoothscroll:{offset:50}}">Адрес на карте</a>
            </div>
        </div>
        <div class="uk-width-1-3 uk-text-center uk-vertical-align"><!-- Логотип -->
            <div class="uk-vertical-align-middle">
                <img src="../../img/logo.png" width="49" height="49" alt="">
                <p class="uk-margin-remove tm-name">Вектор</p>
            </div>
        </div>
        <div class="uk-width-1-3 uk-text-right uk-vertical-align"><!-- Телефон -->
            <div class="uk-vertical-align-middle">
                <span class="uk-text-large"><i class="uk-icon-phone"></i> <span class="ya-phone-2">+7 499 <span class="tm-subhead">394-55-52</span></span></span><br>
                понедельник - пятница, 09<sup>00</sup> - 21<sup>00</sup>
            </div>
        </div>
    </div>
</div>

<div class="uk-margin-top tm-header-border">
    <header class="uk-container uk-container-center">
        <h1 class="uk-text-contrast">
            <?php
                include "php/content.php";
                echo $multiTitle;
            ?>
        </h1>
        <p class="uk-text uk-text-contrast">
            Зачастую для региональных судов мнение Московских экспертов имеет больший вес, чем местных.<br>
            Тем более, если эксперт имеет продолжительный опыт работы в ЭКЦ МВД.
        </p>
        <p class="uk-text uk-text-contrast">
            Специально для регионов мы предлагаем экспертные услуги по средним расценкам Москвы, но с доставкой заключений за наш счет!<br>
        </p>
    </header>
</div>

<div id="company" class="uk-container uk-container-center uk-margin-top tm-background-white tm-shadow"><!-- О компании -->
    <h2 class="uk-h1 uk-text-center">О компании</h2>
    <p class="uk-text-justify">
        ООО Экспертно-консультационный центр «Вектор» осуществляет судебно-экспертную деятельность с 2006 г. Столь длительным существованием компания обязана высокому профессионализму работающих в ней экспертов, а также полной удовлетворенностью результатами их работы судебных органов и граждан. На сегодняшний день ЭКЦ «Вектор» – это:
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
                    Помимо экспертов в штате и их опыта, у нас есть необходимые инструменты – лицензионный программный комплекс CYBID «Graphlog», а также современное оборудование, позволяющее проводить исследования любой сложности и в короткие сроки.
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
                        - <a href="../../doc/requisites.pdf" target="_blank">Карточки предприятий</a> (.pdf, 1,3 mb)
                    </li>
                    <li>
                        - <a href="../../doc/documents_zagika.pdf" target="_blank">Документы эксперта</a> (.pdf, 3,6 mb)
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div id="expert" class="uk-container uk-container-center uk-margin-top tm-background-white tm-shadow"><!-- Эксперт -->
    <h3 class="uk-h1 uk-text-center uk-margin-large-bottom">Об эксперте</h3>
    <div class="uk-grid uk-grid-collapse"><!-- Александр Загика -->
        <div class="uk-width-1-2">
            <p class="uk-text">
                <span class="tm-subhead">Александр Загика</span><br>
                руководитель отдела криминалистических экспертиз
            </p>
            <blockquote class="tm-margin-top-35">
                Наличие высшего профильного образования в области судебной экспертизы, а также многолетний стаж работы в подразделениях МВД позволили мне не только на практике закрепить полученные знания, но и приумножить их каждодневно решая различные криминалистические задачи.<br> За время работы в МВД, мною проведено более тысячи экспертиз и исследований. При производстве экспертиз используется современные методики и оборудование, позволяющие решать практически любые задачи.
                <a href="#reward" data-uk-modal>Неоднократно поощрялся руководством МВД</a>.
            </blockquote>
            <div id="reward" class="uk-modal"><!-- Награды -->
                <div class="uk-modal-dialog uk-modal-dialog-lightbox">
                    <img src="../../img/zagika/reward/1.png" data-uk-lightbox="{group:'reward'}">
                    <img src="../../img/zagika/reward/2.png" data-uk-lightbox="{group:'reward'}">
                    <img src="../../img/zagika/reward/3.png" data-uk-lightbox="{group:'reward'}">
                    <img src="../../img/zagika/reward/4.png" data-uk-lightbox="{group:'reward'}">
                    <img src="../../img/zagika/reward/5.png" data-uk-lightbox="{group:'reward'}">
                </div>
            </div>
            <p class="tm-subhead tm-margin-top-35">Документы эксперта</p>
            <div class="uk-scrollable-box tm-scrollable-box">
                <ul class="uk-list uk-list-line">
                    <li>
                        <p class="uk-text">
                            Высшее юридическое образование МосУМВД РФ<br> по специальности «Судебная экспертиза» <a class="tm-icon-link tm-icon-gray" href="../img/zagika/1.png" data-uk-lightbox="{group:'zagika'}"><i class="uk-icon-file-image-o"></i></a>
                        </p>
                    </li>
                    <li>
                        <p class="uk-text">
                            Второе высшее юридическое образование МЮИ<br> по специальности «Юрист» <a class="tm-icon-link tm-icon-gray" href="../img/zagika/2.png" data-uk-lightbox="{group:'zagika'}"><i class="uk-icon-file-image-o"></i></a>
                        </p>
                    </li>
                    <li>
                        <p class="uk-text">
                            Свидетельство о праве на самостоятельное производство почерковедческой экспертизы и <abbr title="технико-криминалистическая экспертиза документов">ТКЭД<sup>?</sup></abbr> <a class="tm-icon-link" href="../img/zagika/3.png" data-uk-lightbox="{group:'zagika'}"><i class="uk-icon-file-image-o"></i></a>
                        </p>
                    </li>
                    <li>
                        <p class="uk-text">
                            С 2011 по 2017 г. - государственный эксперт-криминалист МВД<br> в ЭКЦ УВД по ЦАО
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="uk-width-1-2">
            <img class="uk-align-right" src="../../img/zagika/zagika.png" width="453" height="720" alt="Александр Загика">
        </div>
    </div>
</div>
<div class="uk-container uk-container-center uk-contrast tm-black tm-shadow"><!-- Преимущества -->
    <h4 class="uk-h1 uk-text-center">Штатный сотрудник</h4>
    <p class="uk-text-justify">
        В отличие от большинства компаний на рынке, Александр Загика является штатным сотрудником ЭКЦ «Вектор». Почему мы так заостряем на этом Ваше внимание?
    </p>
    <div class="uk-width-1-1"><!-- Пункт № 1 -->
        <div class="uk-panel uk-panel-box uk-margin-top uk-margin-bottom tm-panel-box-black">
            <div class="tm-icon-wrapper-black">
                <div class="uk-thumbnail uk-border-circle uk-text-center tm-thumbnail-black">
                    <div class="uk-border-circle tm-icon-container">
                        <i class="uk-icon-ruble uk-icon-medium"></i>
                    </div>
                </div>
            </div>
            <span class="tm-subhead">Прозрачность ценообразования</span>
            <p class="uk-text-justify">
                Вы обсуждаете стоимость напрямую с экспертом, что гарантирует более прозрачное ценообразование и возможность значительного снижения Ваших затрат с учетом экспертной перспективы дела.
            </p>
        </div>
    </div>
    <div class="uk-width-1-1"><!-- Пункт № 2 -->
        <div class="uk-panel uk-panel-box uk-margin-top uk-margin-bottom tm-panel-box-black">
            <div class="tm-icon-wrapper-black">
                <div class="uk-thumbnail uk-border-circle uk-text-center tm-thumbnail-black">
                    <div class="uk-border-circle tm-icon-container">
                        <i class="uk-icon-clock-o uk-icon-medium"></i>
                    </div>
                </div>
            </div>
            <span class="tm-subhead">Сроки подготовки заключения</span>
            <p class="uk-text-justify">
                Вы не ждете, пока посредник все согласует с экспертом. При первой же консультации эксперт, с учетом объема работ и своей загруженности, назовет Вам реальные сроки проведения экспертизы, которые гарантированно будут выдержаны.
            </p>
        </div>
    </div>
    <div class="uk-width-1-1"><!-- Пункт № 3 -->
        <div class="uk-panel uk-panel-box uk-margin-top uk-margin-bottom tm-panel-box-black">
            <div class="tm-icon-wrapper-black">
                <div class="uk-thumbnail uk-border-circle uk-text-center tm-thumbnail-black">
                    <div class="uk-border-circle tm-icon-container">
                        <i class="uk-icon-diamond uk-icon-medium"></i>
                    </div>
                </div>
            </div>
            <span class="tm-subhead">Объективность</span>
            <p class="uk-text-justify">
                Вы общаетесь не с посредником, который имеет «%» с каждого договора, но напрямую с экспертом, который понимает, что при необходимости придется отвечать за свое заключение в суде.
            </p>
        </div>
    </div>
    <div class="uk-width-1-1"><!-- Пункт № 4 -->
        <div class="uk-panel uk-panel-box uk-margin-top tm-margin-bottom-35 tm-panel-box-black">
            <div class="tm-icon-wrapper-black">
                <div class="uk-thumbnail uk-border-circle uk-text-center tm-thumbnail-black">
                    <div class="uk-border-circle tm-icon-container">
                        <i class="uk-icon-balance-scale uk-icon-medium"></i>
                    </div>
                </div>
            </div>
            <span class="tm-subhead">Судебное разбирательство</span>
            <p class="uk-text-justify">
                Вы не окажетесь в ситуации, когда в информационных письмах о возможности проведения экспертизы представлены разные экспертные компании, но один и тот же эксперт, якобы в них работающий.
            </p>
        </div>
    </div>
</div>

<div id="price" class="uk-container uk-container-center uk-margin-top tm-background-white tm-shadow"><!-- Стоимость услуг -->
    <h5 class="uk-h1 uk-text-center">Стоимость услуг</h5>
    <div class="uk-tab-center tm-tab-center">
        <ul class="uk-tab tm-prices-tab" data-uk-tab="{connect:'#prices', amnimation:'fade'}">
            <li class="uk-active"><a class="uk-text-center" href="">Экспертиза почерка и подписи</a></li>
            <li><a class="uk-text-center" href="">Экспертиза документов (ТКЭД)</a></li>
        </ul>
    </div>
    <p class="uk-text-justify">
        Обращаем Ваше внимание, что <span class="uk-text-danger">представленные ниже цены являются фиксированными</span>. От сложности экспертизы зависит лишь срок ее проведения. Приехав заключать договор, Вы не столкнетесь с тем, что указанная на сайте цена будет увеличена по надуманному предлогу после ознакомления с предоставленными материалами.
    </p>
    <ul id="prices" class="uk-switcher">
        <li>
            <table class="uk-table"><!-- Почерк и подпись -->
                <thead>
                    <tr>
                        <th class="uk-text-center uk-contrast">Наименование услуги</th>
                        <th class="uk-text-center uk-contrast">Стоимость, руб.</th>
                    </tr>
                </thead>
                <tbody class="uk-accordion" data-uk-accordion>
                    <tr>
                        <td class="tm-td-border-right">
                            Предварительное исследование подписи (почерка):<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ, образцы подписи (почерка) предполагаемого исполнителя</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 1-го рабочего дня</li>
                                <li><i class="uk-icon-file-pdf-o uk-text-danger"></i><span class="uk-text-bold"> Документ, который Вы получаете:</span> «<a href="../doc/spravka_pocherk.pdf" target="_blank">Справка об исследовании</a>» (.pdf, 0,2 mb, <abbr title="указанный документ не имеет юридической силы и является письменной консультацией">статус документа<sup>?</sup></abbr>)</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">2 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Идентификационная экспертиза подписи:<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span> «Кем, Ивановым И.О., или другим лицом, выполнена подпись в договоре займа 234/56»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ и образцы подписи предполагаемого исполнителя</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 1-х до 2-х рабочих дней</li>
                                <li><i class="uk-icon-file-pdf-o uk-text-danger"></i><span class="uk-text-bold"> Документ, который Вы получаете (здесь и далее):</span> «<a href="../doc/conclusion_pocherk.pdf" target="_blank">Заключение специалиста</a>» (.pdf, 0,7 mb, <abbr title="указанный документ имеет юридическую силу и может быть использован для любых процессуальных действий (например, в качестве обоснования иска)">статус документа<sup>?</sup></abbr>)</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Идентификационная экспертиза почерка:<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span> «Кем, Ивановым И.О., или другим лицом, выполнен текст, начинающийся со слов «...»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> спорный документ и образцы почерка предполагаемого исполнителя</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 2-х до 3-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Диагностическая экспертиза подписи (почерка):<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li>
                                    <i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Примеры вопросов:</span><br>
                                    <ul class="uk-list">
                                        <li>«Мужчиной или женщиной выполнена запись (подпись)?»</li>
                                        <li>«Исполнена ли подпись (запись) лицом, находившимся в состоянии физической усталости,<br>болезненном состоянии, состоянии алкогольного опьянения и.т.д?»</li>
                                        <li>«Выполнена ли подпись (запись) с подражанием почерка определенного человека?»</li>
                                        <li>«В привычной или не привычной позе выполнена подпись (запись)?»</li>
                                    </ul>
                                </li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> спорный документ и образцы почерка и (или) подписи</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 2-х до 3-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Рецензирование (оспаривание) заключений почерковедческой экспертизы:<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span> «Является ли заключение и выводы, содержащиеся в нем, объективными и достоверными»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> заключение эксперта, которое требуется оспорить</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 3-х до 5-ти рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">от 15 000</td>
                    </tr>
                </tbody>
            </table>
        </li>
        <li>
            <table class="uk-table"><!-- ТКЭД -->
                <thead>
                    <tr>
                        <th class="uk-contrast uk-text-center">Наименование услуги</th>
                        <th class="uk-text-center uk-contrast">Стоимость, руб.</th>
                    </tr>
                </thead>
                <tbody class="uk-accordion" data-uk-accordion>
                    <tr>
                        <td class="tm-td-border-right">
                            Предварительное исследование документа<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 1-го рабочего дня</li>
                                <li><i class="uk-icon-file-pdf-o uk-text-danger"></i><span class="uk-text-bold"> Документ, который Вы получаете:</span> «<a href="../doc/spravka_tked.pdf" target="_blank">Справка об исследовании</a>» (.pdf, 0,2 mb, <abbr title="указанный документ не имеет юридической силы, содержит лишь выводы по проведенному исследованию и может быть использован для досудебного урегулирования спора">статус документа<sup>?</sup></abbr>)</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">2 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Установление способа изготовления документа<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span> «С помощью какого технического устройства напечатан документ»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 1-х до 2-х рабочих дней</li>
                                <li><i class="uk-icon-file-pdf-o uk-text-danger"></i><span class="uk-text-bold"> Документ, который Вы получаете (здесь и далее):</span> «<a href="../doc/conclusion_tked.pdf" target="_blank">Заключение специалиста</a>» (.pdf, 0,7 mb, <abbr title="указанный документ содержит описание исследования, полученные выводы и может быть использован для любых процессуальных действий (например, в качестве обоснования иска)">статус документа<sup>?</sup></abbr>)</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Установление <abbr title="залитых, зачеркнутых, замазанных текстов; или измененных путем подчистки, дописки, дорисовки, травления или смывания; или установление факта замены частей документа и т.д.">факта изменения<sup>?</sup></abbr> первоначального содержания документа<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li>
                                    <i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Примеры вопросов:</span>
                                    <ul class="uk-list">
                                        <li>«Имеются ли признаки изменения первоначального содержания документа»?</li>
                                        <li>«Если да, то каково первоначальное содержание документа»?</li>
                                    </ul>
                                </li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 1-х до 2-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Исследование подписи на предмет <abbr title="копирование подписи с предварительной карандашной подготовкой, или на просвет, или с использованием плоттера и т.д.">технической подделки<sup>?</sup></abbr><br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span> «Имеет ли подпись признаки технической подделки»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 1-х до 2-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Исследование <abbr title="паспорта всех видов, водительское удостоверение, разрешение на работу, денежный знак, ценные бумаги, акцизная марка и т.д.">защищенной продукции<sup>?</sup></abbr><br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span><br> «Соответствует ли представленный для исследования объект аналогично-защищенному объекту»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 1-х до 2-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">10 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Установление последовательности изготовления частей документа<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span> «Какова последовательность выполнения печатного текста, подписи и печати на документе»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 2-х до 3-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">15 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Исследование оттисков печатей и штампов<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li>
                                    <i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Примеры вопросов:</span>
                                    <ul class="uk-list">
                                        <li>«Одной или разными печатями нанесены оттиски в представленных документах»?</li>
                                        <li>«Нанесен ли оттиск в представленном документе печатью, образцы которой представлены на исследование»?</li>
                                    </ul>
                                </li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 2-х до 3-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">15 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Установление <abbr title="угасшего от времени, или подвергшегося воздействию высоких температур и т.д.">первоначального содержания текста<sup>?</sup></abbr> документа<br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span> «Каково первоначальное содержание документа»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 2-х до 3-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">15 000</td>
                    </tr>
                    <tr>
                        <td class="tm-td-border-right">
                            Рецензирование (оспаривание) заключений по <abbr title="технико-криминалистическая экспертиза документов">ТКЭД<sup>?</sup></abbr><br>
                            <span class="uk-accordion-title tm-table-accordion-title">Подробнее об услуге</span>
                            <ul class="uk-list uk-text-muted uk-accordion-content tm-table-accordion-content">
                                <li><i class="uk-icon-question-circle"></i><span class="uk-text-bold"> Пример вопроса:</span> «Является ли заключение и выводы, содержащиеся в нем, объективными и достоверными»?</li>
                                <li><i class="uk-icon-search"></i><span class="uk-text-bold"> Необходимые материалы:</span> cпорный документ</li>
                                <li><i class="uk-icon-clock-o"></i><span class="uk-text-bold"> Cрок проведения:</span> от 3-х до 5-х рабочих дней</li>
                            </ul>
                        </td>
                        <td class="uk-text-center uk-table-middle">от 15 000</td>
                    </tr>
                </tbody>
            </table>
        </li>
    </ul>
    <div class="uk-grid uk-grid-small tm-margin-bottom-35">
        <div class="uk-width-1-2">
            <div class="uk-panel uk-panel-box">
                <p class="uk-text-justify">
                    Если экспертиза подразумевает исследование более, чем двух объектов – предоставляется скидка, размер которой обсуждается в индивидуальном порядке.
                </p>
            </div>
        </div>
        <div class="uk-width-1-2">
            <div class="uk-panel uk-panel-box tm-border-red">
                <p class="uk-text-justify">
                    Стоимость проведения экспертизы по определению суда или постановлению иных уполномоченных лиц возрастает на 5 000 руб.
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
                    117105, гор. Москва, Варшавское ш-се, д. 17, офис 249
                </p>
                <p class="uk-text">
                    Телефон:<br>
                    <span class="ya-phone-2">+7 499 <span class="uk-text-bold">394-55-52</span></span>
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
                    <input type="submit" onclick="yaCounter46714887.reachGoal('feedback'); return true;" class="uk-button uk-button-success uk-width-1-1 uk-margin-top" value="Оставить заявку">
                </form>
            </div>
        </div>
    </div>
    <div class="uk-width-1-1 tm-margin-bottom-35">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=v46bI1njYA3RSfJ2r8yAtFnqKXRDm3oU&amp;width=100%&amp;height=250&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>
    </div>
</div>
<div>
    <div class="uk-block uk-block-secondary">
        <p class="uk-text-center uk-contrast">&copy; ООО ЭКЦ «Вектор»</p>
    </div>
</div>

<!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
(function(){ var widget_id = 'YUFzdzJoBL';var d=document;var w=window;function l(){
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
<!-- {/literal} END JIVOSITE CODE -->

</body>

<!-- Яндекс-метрика -->
<script type="text/javascript">
var yaParams = {ip_adress: "<? echo $_SERVER['REMOTE_ADDR'];?>"};
//объявляем параметр ip_adress и записываем в него IP посетителя
</script>

<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter46714887 = new Ya.Metrika({id:46714887, params:window.yaParams,
                    webvisor:true,
                    clickmap:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/46714887" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

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
                <input type="submit" onclick="yaCounter46714887.reachGoal('feedback'); return true;" class="uk-button uk-button-success uk-width-1-1" value="Оставить заявку">
            </div>
        </form>
    </div>
</div>

</html>