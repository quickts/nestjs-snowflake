import { Module, DynamicModule, Global } from "@nestjs/common";
import { createProvider } from "./Snowflake.provider";
import { SnowflakeOptions } from "./snowflake.interface";
import { SnowflakeService } from "./snowflake.service";

@Module({})
export class SnowflakeModule {
    static forRoot(options: SnowflakeOptions): DynamicModule {
        const provider = createProvider(options);
        return {
            module: SnowflakeModule,
            providers: [provider, SnowflakeService],
            exports: [SnowflakeService],
        };
    }
}

@Global()
@Module({})
export class SnowflakeGlobalModule {
    static forRoot(options: SnowflakeOptions): DynamicModule {
        const provider = createProvider(options);
        return {
            module: SnowflakeGlobalModule,
            providers: [provider, SnowflakeService],
            exports: [SnowflakeService],
        };
    }
}
