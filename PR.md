## Persistência de Dados e Setup do Banco de Dados

Para persistir os dados fornecidos, primeiro, converti o csv para json e mais tarde, durante a realização das queries corri um script para alterar as `,` para `.`.
Este foi o json colocado numa instância de banco de dados MongoDB usando um contêiner Docker. O comando utilizado foi:

```bash 
sudo docker run -d -p 27017:27017 --name contratosgov mongo
``` 

Importei os dados do arquivo JSON contratos2024.json para o banco de dados MongoDB. Para isso, copiei o arquivo para o contêiner Docker:

```bash 
sudo docker cp contratos2024.json contratosgov:/tmp
``` 
E de seguida importei para o contêiner

```bash
sudo docker exec contratosgov mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray
``` 