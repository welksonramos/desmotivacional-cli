# Desmotivacional-cli
[![bitHound Overalll Score](https://www.bithound.io/github/welksonramos/desmotivacional-cli/badges/score.svg)](https://www.bithound.io/github/welksonramos/desmotivacional-cli) [![bitHound Dependencies](https://www.bithound.io/github/welksonramos/desmotivacional-cli/badges/dependencies.svg)](https://www.bithound.io/github/welksonramos/desmotivacional-cli/master/dependencies/npm)  [![bitHound Code](https://www.bithound.io/github/welksonramos/desmotivacional-cli/badges/code.svg)](https://www.bithound.io/github/welksonramos/desmotivacional-cli) [![npm version](https://img.shields.io/npm/v/slush-jmodule.svg)](https://www.npmjs.com/package/slush-jmodule) [![license](https://img.shields.io/npm/l/slush-jmodule.svg?style=flat)](https://raw.github.com/welksonramos/slush-jmodule/blob/master/LICENSE)
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
 ### Opções:
 
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
 Copyright (c) 2015, Welkson Ramos. Licensed under the [MIT License](LICENSE).
