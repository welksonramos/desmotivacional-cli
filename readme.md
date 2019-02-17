# Desmotivacional-cli
[![Build Status](https://travis-ci.org/welksonramos/desmotivacional-cli.svg?branch=master)](https://travis-ci.org/welksonramos/desmotivacional-cli) [![npm version](https://img.shields.io/npm/v/desmotivacional-cli.svg)](https://www.npmjs.com/package/desmotivacional-cli) [![dependencies Status](https://david-dm.org/welksonramos/desmotivacional-cli/status.svg)](https://david-dm.org/welksonramos/desmotivacional-cli) [![license](https://img.shields.io/npm/l/desmotivacional-cli.svg?style=flat)](https://raw.github.com/welksonramos/desmotivacional-cli/blob/master/LICENSE)

>  Mensagens desmotivacionais via linha de comando

## Instalação

 ```bash
 $ npm install desmotivacional-cli --save
 ```
  
## Uso

 ```js
var desmotivacional = require('desmotivacional-cli');
desmotivacional.random()
=> Não desanime com a derrota de hoje. Amanhã tem outra.
 ```
## CLI
 
 ```bash
 npm install desmotivacional-cli -g
 ```
 ```
 Usage: desmotivacional [options]
 ```
### Opções
 
 ```bash
 -h, --help     output usage information
 -V, --version  output the version number
 -a, --all      display all phrases
 ```
### Exemplos:

```bash
desmotivacional
=> Para de bater p** pra desenho
```
**Exibe todas as frases**

```
desmotivacional --all
=> As pessoas só te incentivam para rir do seu fracasso.
=> Seus sonhos nunca se realizarão.
=> ...
```

 * Baseado em [Desmotivacional](https://github.com/flaviotruzzi/desmotivacional) criado por [flaviotruzzi](https://github.com/flaviotruzzi)

## License
Licensed under the [MIT License](LICENSE).
