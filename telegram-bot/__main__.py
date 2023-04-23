# pylint: disable=invalid-name
"""
telegram-bot - анализатор темы текстов.
Использование:
    Аргумент -h             Отобразить это сообщение
    Аргумент -i <файл>      Обработать текст из файла
    add <тема>              Добавить темы
    remove <тема>           Удалить тему
    list                    Отобразить сохраненные темы
    text <text>             Обработать введенный текст
    Аргумент -t <файл>      Использовать свой словарь тем

Полное использование:
Usage:
    telegram-bot (-h|--help|--version)
    telegram-bot [-i=<path>]    [-t=<path>]
    telegram-bot add <theme>    [-t=<path>]
    telegram-bot remove <theme> [-t=<path>]
    telegram-bot list           [-t=<path>]
    telegram-bot text [-t=<path>] <text>

Options:
    <theme>                   Название темы
    <text>                    Обычный текст

"""
from docopt import docopt

from telegram_bot.main import main


if __name__ == '__main__':
    # Запуск
    main()
