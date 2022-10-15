import { registerPlugin } from '@capacitor/core';

export interface EchoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

const Echo:any = registerPlugin<EchoPlugin>('Echo');

 export default Echo;