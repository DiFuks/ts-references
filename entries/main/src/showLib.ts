/**
 * References adds typing to the IDE even if the module is not built.
 * That is, the IDE will understand: import { getLib } from "@ts-references/submodule"
 * even if there is no dist in "../../submodule"
**/

/**
 * babel-loader/ts-node (with references or not)
 *
 * 1. @ts-references/submodule
 * 1.1. ОК. submodule dist exists
 * 1.2. FAIL. submodule dist empty
 *
 * 2. @ts-references/submodule/src
 * 2.1. ОК. submodule dist exists
 * 2.2. OK. submodule dist empty
 *
 * 3. ../../submodule
 * 3.1. ОК. submodule dist exists
 * 3.2. FAIL. submodule dist empty
 *
 * 4. ../../submodule/src
 * 4.1. ОК. submodule dist exists
 * 4.2. OK. submodule dist empty
*/

/**
 * tsc (without references and --build)
 *
 * 1. @ts-references/submodule
 * 1.1. ОК. submodule dist exists
 * 1.2. FAIL. submodule dist empty
 *
 * 2. @ts-references/submodule/src
 * 2.1. ОК. submodule dist exists
 * 2.2. OK. submodule dist empty
 *
 * 3. ../../submodule
 * 3.1. OK. submodule dist exists
 * 3.2. FAIL. submodule dist empty
 *
 * 4. ../../submodule/src
 * 4.1. FAIL. submodule dist exists
 * 4.2. FAIL. submodule dist empty
*/

/**
 * tsc (with references and --build)
 *
 * 1. @ts-references/submodule
 * 1.1. ОК. submodule dist exists
 * 1.2. OK. submodule dist empty
 *
 * 2. @ts-references/submodule/src
 * 2.1. ОК. submodule dist exists
 * 2.2. OK. submodule dist empty
 *
 * 3. ../../submodule
 * 3.1. OK. submodule dist exists
 * 3.2. OK. submodule dist empty
 *
 * 4. ../../submodule/src
 * 4.1. OK. submodule dist exists
 * 4.2. OK. submodule dist empty
*/

/**
 * ts-loader (without references)
 *
 * 1. @ts-references/submodule
 * 1.1. FAIL. submodule dist exists
 * 1.2. FAIL. submodule dist empty
 *
 * 2. @ts-references/submodule/src
 * 2.1. FAIL. submodule dist exists
 * 2.2. FAIL. submodule dist empty
 *
 * 3. ../../submodule
 * 3.1. FAIL. submodule dist exists
 * 3.2. FAIL. submodule dist empty
 *
 * 4. ../../submodule/src
 * 4.1. FAIL. submodule dist exists
 * 4.2. FAIL. submodule dist empty
*/

/**
 * ts-loader (with references)
 *
 * 1. @ts-references/submodule
 * 1.1. FAIL. submodule dist exists
 * 1.2. FAIL. submodule dist empty
 *
 * 2. @ts-references/submodule/src
 * 2.1. ОК. submodule dist exists
 * 2.2. OK. submodule dist empty
 *
 * 3. ../../submodule
 * 3.1. FAIL. submodule dist exists
 * 3.2. FAIL. submodule dist empty
 *
 * 4. ../../submodule/src
 * 4.1. OK. submodule dist exists
 * 4.2. OK. submodule dist empty
 */
import { getLib } from '@ts-references/submodule';

export const showLib = () => console.log(getLib());
