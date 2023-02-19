import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsAfterDate(property: string, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isFechaPosterior',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const otherPropertyName = args.constraints[0];
          const otherValue = (args.object as Record<string, any>)[otherPropertyName];
          if (otherValue instanceof Date && value instanceof Date) {
            return value > otherValue;
          }
          return false;
        },
        defaultMessage(args: ValidationArguments) {
          const otherPropertyName = args.constraints[0];
          return `${propertyName} debe ser posterior a ${otherPropertyName}`;
        },
      },
    });
  };
}
