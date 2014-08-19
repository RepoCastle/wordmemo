#!/usr/bin/env python2.7

import json
from pprint import pprint


def questionWord(word):
    return "<font>" + word + "</font>"
def answerPhonetic(phonetic):
    return "<font color='red'>" + phonetic + "</font>"
def answerTranslation(translation):
    return "<font>" + translation + "</font>"
def answerExplain(explain):
    return "<font color='green'>" + explain + "</font>"
def answerWebKey(webKey):
    return "<font color='red'>" + webKey + "</font>"
def answerWebValue(webValue):
    return "<font color='blue'>" + webValue + "</font>"

if __name__ == "__main__":
    worddir = './youdao.json.processed'

    wordfile = './words.txt'
    for line in open(wordfile):
        for word in line.strip().split('\t'):
            result = ""

            question = ""
            answer = ""
            catagory = ""
            note = ""

            word = word.strip()
            wordfile = worddir + '/' + word + '.json'
            json_data = open(wordfile)
            data = json.load(json_data)

            if 'query' in data:
                question = questionWord(data['query'])

            if 'basic' in data and 'phonetic' in data['basic']:
                answer += answerPhonetic(data['basic']['phonetic']) + '<br>'

            if 'translation' in data:
                for translation in data['translation']:
                    answer += answerTranslation(translation) + '<br>'
                answer += '<br>'

            if 'basic' in data and 'explains' in data['basic']:
                for explain in data['basic']['explains']:
                    answer += answerExplain(explain) + '<br>'
                answer += '<br>'
 
            if 'web' in data:
                for web in data['web']:
                    if 'key' in web:
                        answer += answerWebKey(web['key']) + ' : '
                        for value in web['value']:
                            answer += answerWebValue(value) + '; '
                        answer += '<br>'

            question = '"' + question + '"'
            answer = '"' + answer + '"'
            catagory = '"extra"'
            note = '""'
            result = u','.join((question, answer, catagory, note)).encode('utf-8')

            print result
