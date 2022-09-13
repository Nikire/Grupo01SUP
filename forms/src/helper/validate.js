export const validate = data => {
	const errors = {};

	if (data.name.trim() === "") errors.name = "Este campo no puede estar vacio";
	if (data.name.length > 9) errors.name = "Nombre muy largo. Cambialo";

	if (data.age < 18) errors.age = "Papi vení cuando tengas 18";
	if (data.age > 90) errors.age = "Papi vení cuando nazcas de vuelta";

	if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "email inválido";
	return errors;
};
