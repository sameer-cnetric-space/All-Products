// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oA4ns74nCWhwzZGGUPcYHh
// Component: TGuHOjOTa4nK
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { ProductCollection } from "@plasmicpkgs/commerce"; // plasmic-import: vU2jzVAnFP/codeComponent
import { ProductMedia } from "@plasmicpkgs/commerce"; // plasmic-import: qpULM0wwWW/codeComponent
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: S1F4q0wN6b/codeComponent
import { ProductPriceComponent } from "@plasmicpkgs/commerce"; // plasmic-import: _PaJxGc8gf/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_all_products.module.css"; // plasmic-import: oA4ns74nCWhwzZGGUPcYHh/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: TGuHOjOTa4nK/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"All Products"}
                </h1>
              }

              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
          <ProductCollection
            data-plasmic-name={"productCollection"}
            data-plasmic-override={overrides.productCollection}
            className={classNames("__wab_instance", sty.productCollection)}
            emptyMessage={
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rCbxH
                    )}
                  >
                    {"No product found!"}
                  </div>
                )}
              </ph.DataCtxReader>
            }
            loadingMessage={
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__g7RnS
                    )}
                  >
                    {"Loading..."}
                  </div>
                )}
              </ph.DataCtxReader>
            }
          >
            <ph.DataCtxReader>
              {$ctx =>
                true ? (
                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(projectcss.all, sty.freeBox)}
                  >
                    <ProductMedia
                      data-plasmic-name={"productMedia"}
                      data-plasmic-override={overrides.productMedia}
                      className={classNames("__wab_instance", sty.productMedia)}
                    />

                    <ProductTextField
                      data-plasmic-name={"productTextField"}
                      data-plasmic-override={overrides.productTextField}
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField
                      )}
                      field={"name"}
                    />

                    <ProductPriceComponent
                      data-plasmic-name={"productPrice"}
                      data-plasmic-override={overrides.productPrice}
                      className={classNames("__wab_instance", sty.productPrice)}
                    />
                  </div>
                ) : null
              }
            </ph.DataCtxReader>
          </ProductCollection>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "text",
    "h1",
    "productCollection",
    "freeBox",
    "productMedia",
    "productTextField",
    "productPrice"
  ],

  text: ["text", "h1"],
  h1: ["h1"],
  productCollection: [
    "productCollection",
    "freeBox",
    "productMedia",
    "productTextField",
    "productPrice"
  ],

  freeBox: ["freeBox", "productMedia", "productTextField", "productPrice"],
  productMedia: ["productMedia"],
  productTextField: ["productTextField"],
  productPrice: ["productPrice"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    h1: makeNodeComponent("h1"),
    productCollection: makeNodeComponent("productCollection"),
    freeBox: makeNodeComponent("freeBox"),
    productMedia: makeNodeComponent("productMedia"),
    productTextField: makeNodeComponent("productTextField"),
    productPrice: makeNodeComponent("productPrice"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Products",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
