import sys
import json
import requests

def main(dict):
    url = "https://ncov.sinave.gob.mx/Mapa.aspx/Grafica22"
    payload = {}
    headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
    }
    
    response = requests.request("POST", url, headers=headers, data = payload)
    myjson = json.loads(response.text.encode('utf8'))
    myjson = json.loads(myjson["d"])
    mynewjson ={}
    posc=0
    negc=0
    sosc=0
    diec=0
    mynewjson["totalr"]=[]
    mem=0
    for x in range(0,len(myjson)-1):
        mynewjson[myjson[x][1]]={"pos":myjson[x][4],"neg":myjson[x][5],"sos":myjson[x][6],"die":myjson[x][7]}
        posc=posc+int(myjson[x][4])
        negc=negc+int(myjson[x][5])
        sosc=sosc+int(myjson[x][6])
        diec=diec+int(myjson[x][7])
        if(int(myjson[x][4])>=int(mem)):
            mem=myjson[x][4]
        mynewjson["total"]={"cou":"Mexico","pos":posc,"neg":negc,"sos":sosc,"die":diec,"max":mem}
        temp = mynewjson["totalr"]
        temp.append({"cou":myjson[x][1],"pos":myjson[x][4],"neg":myjson[x][5],"sos":myjson[x][6],"die":myjson[x][7]})
    return {
    'statusCode': 200,
    'body': json.dumps(mynewjson)
    }
    