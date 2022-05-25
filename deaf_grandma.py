import re
def deaf_grandma():
    leave = False
    while leave != True:
        text = input('You say to your grandma...')
        whisper = re.search("[a-z]", text)
        if text == 'GOODBYE!':
            text = input("'LEAVING SO SOON?' she yells.")
            if text == 'GOODBYE!':
                print("'LATER, SKATER!' she waves in jest")
                break
            elif whisper:
                print("'SPEAK UP, KID!' she yells. At you.")
            elif text == '':
                print("'WHAT?' she yells")
            else:
                print("'NO, NOT SINCE 1946!' she yells.")
        if whisper:
            print('"SPEAK UP, KID!" she yells.')
        elif text == '':
            print('"WHAT?" She yells.')
        else:
            print('"NO, NOT SINCE 1946!" she yells.')

    print('Finally escaped.')
deaf_grandma()