# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

VERSION = '1.0.0'
long_description = ''

setup(
    name='voti',
    version=VERSION,
    packages=find_packages(),
    license='MIT',
    description='',
    long_description=long_description,
    author='Voti',
    author_email='echarrod@gmail.com',
    install_requires=['cryptography>=1.4', 'protobuf>=3.0.0',
                      'requests>=2.0.0', 'Flask>=0.10'],
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Intended Audience :: Developers',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ],
    keywords='',
)
