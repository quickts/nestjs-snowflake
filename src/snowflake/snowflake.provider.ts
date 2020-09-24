import { Provider } from "@nestjs/common";
import { SnowflakeOptions } from "./snowflake.interface";
import { SNOWFLAKE_OPTION } from "./snowflake.constants";

export function createProvider(snowflakeOptions: SnowflakeOptions): Provider<SnowflakeOptions> {
    return {
        provide: SNOWFLAKE_OPTION,
        useValue: snowflakeOptions,
    };
}
