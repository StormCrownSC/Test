import re
from os import path

import setuptools


def read(fname):
    return open(path.join(path.dirname(__file__), fname),
                encoding="utf-8").read()


metadata = dict(
    re.findall(
        r"""__([a-z]+)__ = '([^']+)""", read("telegram_bot/__init__.py")
    )
)

setuptools.setup(
    name='telegram_bot',
    version=metadata["version"],
    author="StormFox",
    description='Проект расписание РТУ-МИРЭА',
    long_description=read("README.md"),
    long_description_content_type="text/markdown",
    packages=['telegram_bot'],
    entry_points={
        'console_scripts': ['telegram_bot = telegram_bot.__main__:main']
    },
    install_requires=[
        'docopt',
        'pytelegramBotAPI',
        'python-dotenv'
    ],
    extras_require={
        'dev': [
            'setuptools',
            'pre-commit',
            'pytest',
            'autopep8',
            'pydocstyle',
            'pylint',
            'sphinx',
            'sphinx_rtd_theme'
        ]
    },
    python_requires='>=3.7, <4'
)
