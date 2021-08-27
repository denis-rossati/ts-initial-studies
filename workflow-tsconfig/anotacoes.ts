/* 
Como você pode ver agora, temos algumas pastas a mais. 
Como você deve saber, usamos a pasta "public" para armazenar nossos arquivos finais e compilados. Assim como temos a pasta "src" para armazenar 
arquivos que usamos em produção. Como testes e .ts

Dessa vez veremos como configurar o tsconfig.
Para gerar ele, digitamos "npx tsc --init". 

Após isso, temos umas chaves importantes que podemos modificar.
Se quisermos especificar onde estão os arquivos a serem compilados, inserimos o caminho do diretorio na chave "rootDir".
Quando queremos especificar em que pastas ficarão os arquivos compilados, botamos o caminho na chave "outDir".

O rootDir pega tanto os arquivos .ts dentro da sua pasta como fora também. Por isso no final do tsconfig, adicionamos
a chave "include", que é um array especificando exatamente quais pastas contém arquivos para serem compilados.
Para ver na prática, você pode assistir esse vídeo https://www.youtube.com/watch?v=Y4IiQY9dNRA&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=7
*/