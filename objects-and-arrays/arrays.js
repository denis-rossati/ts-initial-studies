var utensilios = ['colher', 'garfo'];
utensilios.push(100);
utensilios[0] = true;
// como definimos nosso array apenas com strings, o typescript pensa
// "Esse array pode receber APENAS strings".
utensilios.push('faca');
utensilios[3] = 'guardanapo';
// ----------------
var idadeAleatoria = function () {
    return Math.round(Math.random() * 30);
};
var idadeEmString = function () {
    return (Math.round(Math.random() * 30)).toString();
};
var idades = [93, 52];
idades.push(idadeAleatoria());
idades.push(idadeEmString());
// ----------------
var idadesComString = ['15', 16, '20', 29, 46];
idadesComString[0] = idadeAleatoria();
idadesComString.push(idadeAleatoria());
idadesComString[5] = idadeEmString();
idadesComString.push(idadeEmString());
// O typescript até avisa alguns erros de digitação
idadeComString.push(idadeAleatoria());
// Resumindo, os tipos disponiveis num array são definidos no seu momento inicial, na hora da sua atribuição.
