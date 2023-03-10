// Importa o arquivo JSON
import {monster} from '../../models/monsters/bestiary-mm.js';

class AllMonstersController {
  execute(req, res) {
    // Atribui o objeto JSON importado a uma variável e especifica seu tipo
    return res.json(monster);
  }
}

export { AllMonstersController };

